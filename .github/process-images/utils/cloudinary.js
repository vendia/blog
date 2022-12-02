const path = require('path')
const cloudinary = require('cloudinary')
const { promisify } = require('util')
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env

let initialized = false

function getClient({ cloudName, apiKey, apiSecret }) {
  if (initialized) return cloudinary
  cloudinary.config({
    cloud_name: cloudName || CLOUD_NAME,
    api_key: apiKey || CLOUD_API_KEY,
    api_secret: apiSecret || CLOUD_API_SECRET,
  })
  initialized = true
  return cloudinary
}

async function uploadImage(filePath, opts = {}) {
  const { cloudName, apiKey, apiSecret } = opts
  const client = getClient({ 
    cloudName: cloudName || CLOUD_NAME,
    apiKey: apiKey || CLOUD_API_KEY,
    apiSecret: apiSecret || CLOUD_API_SECRET
  })

  const uploadFile = promisify(client.v2.uploader.upload)
  const fileId = getImageId(filePath)

  const res = await uploadFile(filePath, {
    use_filename: true,
    overwrite: true,
    public_id: fileId
  })

  return {
    filePath: filePath,
    ...res
  }
}

async function getImageDetails(filePath, opts = {}) {
  const { cloudName, apiKey, apiSecret } = opts
  const imageId = getImageId(filePath)
  const client = getClient({
    cloudName: cloudName || CLOUD_NAME,
    apiKey: apiKey || CLOUD_API_KEY,
    apiSecret: apiSecret || CLOUD_API_SECRET
  })
  const getDetails = promisify(client.v2.api.resource)
  let res = {}
  try {
    res = await getDetails(imageId)
  } catch (err) {
    if (err && (err.http_code === 404 || err.http_code === '404')) {
      /* exclude images that match res.cloudinary.com b/c they are already uploaded */
      const fileName = path.basename(filePath)
      if (fileName.match(/^res\.cloudinary\.com/)) {
        // console.log(`Already in cloudinary: ${fileName}`)
        // process.exit(1)
        const url = decodeURIComponent(fileName)
        return {
          notFound: false,
          isCloudinaryUrl: true,
          secure_url: `https://${url}`,
          // Convert back to cloudinary ID
          imageId: getImageId(url),
          filePath: filePath
        }
      }

      console.log(`${imageId} image not found in cloudinary.`)

      return {
        notFound: true,
        imageId: imageId,
        filePath: filePath
      }
    }
    console.log('cloudinary err', err)
    // Rethrow unknown errors
    throw err
  }
  return {
    filePath,
    ...res,
  }
}

const getPublicId = (imageURL) => imageURL.split("/").pop().split(".")[0]

function getImageId(filePath) {
  return path.basename(filePath).replace(/\.(png|jpe?g|gif)$/, '')
}

module.exports = {
  getImageId,
  getImageDetails,
  uploadImage,
}