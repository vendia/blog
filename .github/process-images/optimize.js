const path = require('path')
const { globby } = require('markdown-magic')
const { deleteFile } = require('./utils/fs')
const { download } = require('./utils/download')
const { readImageMeta, writeImageMeta } = require('./utils/exif')
const { uploadImage, getImageDetails, getImageId } = require('./utils/cloudinary')

const imageTypes = ['.gif', '.png', '.jpg', '.jpeg']
function getGlobPattern(dir, extensions = imageTypes) {
  const globPatterns = extensions.map((fileType) => {
    return `${dir}/**/*${fileType}`
  })
  return globPatterns
}

async function optimizeImages({ inputDir, outputDir, images }) {
  const globPatterns = getGlobPattern(inputDir) 

  let imageFiles = images
  if (!imageFiles) {
    imageFiles = await globby(globPatterns)
  }
  console.log('imageFiles', imageFiles)

  const alreadyProcessedImagePaths = await globby(getGlobPattern(outputDir))
  // console.log('alreadyProcessedImages', alreadyProcessedImagePaths)
  const alreadyProcessedImages = await readImageMeta(alreadyProcessedImagePaths)
  // console.log('alreadyProcessedImages', alreadyProcessedImages)
  const persistedImageData = alreadyProcessedImages.map((exif) => {
    const savedInfo = safeParse(exif.Comment)
    const details = (typeof savedInfo === 'object') ? savedInfo : {}
    return {
      imageId: getImageId(exif.SourceFile),
      file: exif.SourceFile,
      fileName: exif.FileName,
      ...details,
    }
  })
  console.log('persistedImageData', persistedImageData)
  /* debugger for just a couple files
  imageFiles = [ imageFiles[0], imageFiles[1] ]
  /***/

  /* Check if images already exist in cloudinary */
  const doCloudinaryFilesExist = imageFiles.map((image) => {
    return getImageDetails(image)
  })

  const remoteImageData = (await Promise.all(doCloudinaryFilesExist)).map((remote) => {
    /* If remote cloudinary src file has been altered mark it for a force download */
    const matchingFile = persistedImageData.find((local) => {
      return (remote.public_id === local.imageId) && (remote.version === local.version)
    })
    return {
      ...remote,
      /* If remote cloudinary src file has been altered mark it for a force download */
      needsLocalUpdate: !Boolean(matchingFile)
    }
  })

  const existingRemoteImages = remoteImageData.filter((img) => !img.notFound)
  const existingLocalImages = remoteImageData.filter((img) => !img.notFound)

  if (existingRemoteImages.length) {
    console.log(`Found ${existingRemoteImages.length} files in cloudinary`)
    // console.log('existingRemoteImages', existingRemoteImages)
  }
  
  const filesToUpload = remoteImageData.filter((img) => {
    if (img.notFound) console.log(`Schedule upload ${img.filePath}`)
    return img.notFound
  })
  // console.log('filesToUpload', filesToUpload)

  if (!filesToUpload.length) {
    console.log('All images already uploaded')
    // return existingRemoteImages
  }

  const newlyUploadedImages = filesToUpload.map((image) => {
    return uploadImage(image.filePath)
  })
  
  const newImages = await Promise.all(newlyUploadedImages)
  const allImageData = newImages.concat(existingRemoteImages)
  // console.log('allImageData', allImageData)

  const downloadPromises = allImageData.map((cloudinaryData) => {
    // console.log('cloudinaryData', cloudinaryData)
    const outputPath = path.join(outputDir, path.basename(cloudinaryData.secure_url))
    const optimizedUrl = getImageUrl(cloudinaryData.secure_url)
    return download({ 
      url: optimizedUrl,
      outputPath, 
      meta: {
        fileName: `${cloudinaryData.public_id}${path.extname(cloudinaryData.secure_url)}`,
        ...cloudinaryData
      },
      forceDownload: cloudinaryData.needsLocalUpdate
    })
  })
  const dlInfo = await Promise.all(downloadPromises)
  // console.log('dlInfo', dlInfo)

  const filesToUpate = dlInfo.filter((file) => {
    return !file.cached
  })

  if (!filesToUpate.length) {
    console.log('All set')
    // return dlInfo
  }
  // console.log('filesToUpate', filesToUpate)

  const updateImageDetails = filesToUpate.map((file) => {
    // console.log('Update image meta', file.output)
    return {
      filePath: file.output,
      meta: {
        version: file.meta.version,
      }
    }
  })

  /* Save cloudinary version info to the downloaded image */
  console.log('Updating image meta...')
  await writeImageMeta(updateImageDetails)

  /* Clean up backup image files */
  const backupFilePaths = getGlobPattern(outputDir, ['_original'])
  const backupFiles = await globby(backupFilePaths)
  if (backupFiles.length) {
    await Promise.all((backupFiles.map((filePath) => {
      // console.log(`Removing backup image file ${filePath}`)
      return deleteFile(filePath)
    })))
  }

  return {
    dlInfo: dlInfo,
    filesToUpate,
    persistedImageData
  }
}

function safeParse(value) {
  let val = value
  try {
    val = JSON.parse(value)
  } catch (e) {}
  return val
}

// Make images 90% quality to shrink them
function getImageUrl(imageUrl, qualityLevel = 90) {
  return imageUrl.replace(/\/upload\/v[A-Za-z0-9]+\//, `/upload/q_${qualityLevel}/`)
}

module.exports = {
  optimizeImages
}