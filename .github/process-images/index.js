/* image-pipeline */
const path = require('path')
const { collectImages, makeRegex } = require('./collect')
const { optimizeImages } = require('./optimize')
const { uploadObjects } = require('./utils/s3')
const { readFile, writeFile } = require('./utils/fs')
const {
  CDN_ROOT_URL,
  S3_BUCKET_NAME, 
  S3_BUCKET_DIRECTORY,
} = process.env

const TEMP_DOWNLOAD_DIR = path.resolve(__dirname, '.images', 'original-images')
const OPTIMIZED_OUTPUT_DIR = path.resolve(__dirname, '.images', 'optimized-images')

const cdnPrefix = CDN_ROOT_URL || 'https://d24nhiikxn5jns.cloudfront.net'
const bucketName = S3_BUCKET_NAME || 'assets-vendia'
const bucketDirectory = S3_BUCKET_DIRECTORY || 'optimized'

async function imagePipeline() {
  /* 1. collect all non cdn images from files */
  console.log('Collecting all images from markdown...')
  // @TODO optimize this and only pull back md files that have changed
  const allMdFiles = [
    'posts/**/*.md',
    'posts/**/*.mdx',
    'releases/**/*.md',
    'releases/**/*.mdx',
    '!CONTRIBUTING.md',
    '!README.md',
    '!node_modules/**'
  ]

  const originalImages = await collectImages({
    outputDir: TEMP_DOWNLOAD_DIR,
    markdownGlob: allMdFiles,
    exclude: [
      makeRegex(`^${cdnPrefix}`)
    ],
    include:  [
      // 'https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-05-10-dont-'
    ]
  })
  console.log(`Found ${originalImages.downloadedImages.length} images`)
  // console.log('originalImages', originalImages)
  // process.exit(1)

  /* 2. Optimize all downloaded files */
  console.log('Optimizing Images...')
  const optimizedImages = await optimizeImages({
    inputDir: TEMP_DOWNLOAD_DIR,
    outputDir: OPTIMIZED_OUTPUT_DIR
  })
  // console.log('optimizedImages', optimizedImages)
  // process.exit(1)

  /* 3. Upload image files */
  const bucketPrefix = (bucketDirectory) ? `${bucketDirectory.replace(/\/$/, '')}/` : ''
  // console.log('bucketPrefix', bucketPrefix)
  /* Original image urls and files they exist in */
  const uploadPaths = originalImages.downloadedImages.map((imgData) => {
    // console.log('meta', imgData.meta)
    const updatedFileName = imgData.meta.updatedFileName
    // Fix weird jpg bug https://github.com/vendia/blog/runs/7329217719?check_suite_focus=true#step:4:739
    .replace(/\.jpeg$/, '.jpg')
    //console.log('updatedFileName', updatedFileName)
    return {
      id: `${bucketPrefix}${updatedFileName}`,
      path: path.resolve(OPTIMIZED_OUTPUT_DIR, updatedFileName)
    }
  })

  console.log('Upload images to s3')
  console.log(uploadPaths)
  const s3Response = await uploadObjects(bucketName, uploadPaths)
  // console.log('s3Response', s3Response)

  /* 4. Replace existing image link */
  await asyncForEach(originalImages.downloadedImages, async (imgData) => {
    const { meta, url } = imgData
    // console.log('imgData', imgData)
    const newUrl = s3Response.find(({ id }) => {
      return path.basename(id) === meta.updatedFileName
    })
    const cdnLink = `${cdnPrefix}/${newUrl.id}`
    console.log(`Replace`)
    console.log('> url', url)
    console.log(`> with ${cdnLink}`)
    console.log('> in file', meta.location)
    const content = await readFile(meta.location, 'utf-8')
    // console.log('content', content)
    const linkPattern = makeRegex(url, 'g')
    // console.log('linkPattern', linkPattern)
    const updatedContent = content
      .replace(linkPattern, cdnLink)
      .replace(url, cdnLink)

    await writeFile(meta.location, updatedContent)
  })
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

imagePipeline().then(() => {
  console.log('done')
})
