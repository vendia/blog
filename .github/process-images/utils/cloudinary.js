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

  return res
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
    console.log('cloudinary err', err)
    if (err && (err.http_code === 404 || err.http_code === '404')) {
      console.log(`${imageId} image not found in cloudinary`)
      return {
        notFound: true,
        imageId: imageId,
        filePath: filePath
      }
    }
    // Rethrow unknown errors
    throw err
  }
  return res
}

function getImageId(filePath) {
  return path.basename(filePath).replace(/\.(png|jpe?g|gif)$/, '')
}

module.exports = {
  getImageId,
  getImageDetails,
  uploadImage,
}