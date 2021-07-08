/*
image-pipeline
*/
const path = require('path')
const { collectImages } = require('./collect')
const { optimizeImages } = require('./optimize')
const { uploadObjects } = require('./utils/s3')

const TEMP_DOWNLOAD_DIR = path.resolve(__dirname, '.images', 'original-images')
const OPTIMIZED_OUTPUT_DIR = path.resolve(__dirname, '.images', 'optimized-images')
const CDN_PREFIX = 'https://d24nhiikxn5jns.cloudfront.net'
const bucketName = 'assets-vendia'
const bucketDirectory = 'test'

async function imagePipeline() {
  /* 1. collect all non cdn images from files */
  console.log('Collecting all images from markdown...')
  const originalImages = await collectImages({
    outputDir: TEMP_DOWNLOAD_DIR,
    markdownGlob: [
      'posts/**/*.md',
      'posts/**/*.mdx',
      '!CONTRIBUTING.md',
      '!README.md',
      '!node_modules/**'
    ],
    exclude: [
      /^https:\/\/d24nhiikxn5jns\.cloudfront\.net/
    ],
    include:  [
      // 'https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-05-10-dont-'
    ]
  })
  console.log(`Found ${originalImages.downloadedImages.length} images`)
  // console.log('originalImages', originalImages.downloadedImages)
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
  /* Original image urls and files they exist in */
  const uploadPaths = originalImages.downloadedImages.map((imgData) => {
    // console.log('meta', imgData.meta)
    const updatedFileName = imgData.meta.updatedFileName
    //console.log('updatedFileName', updatedFileName)
    return {
      id: `${bucketPrefix}${updatedFileName}`,
      path: path.resolve(OPTIMIZED_OUTPUT_DIR, updatedFileName)
    }
  })

  const s3Response = await uploadObjects(bucketName, uploadPaths)
  // console.log('s3Response', s3Response)

  // console.log(originalImages.imagesToProcess)
  // originalImages.imagesToProcess.forEach(([ src, file ]) => {
  //   console.log(`replace ${src} in ${file}`)
  // })

  const updateContents = originalImages.downloadedImages.map((imgData) => {
    const { meta, url } = imgData
    // console.log('imgData', imgData)
    const newUrl = s3Response.find(({ id }) => {
      return path.basename(id) === meta.updatedFileName
    })

    console.log(`Replace`)
    console.log('> url', url)
    console.log('> with', `https://assets-vendia.s3.amazonaws.com/${newUrl.id}`)
    console.log(`> xyz ${CDN_PREFIX}/${newUrl.id}`)
    console.log('> in file', meta.location)
  })
}

imagePipeline().then(() => {
  console.log('done')
})
