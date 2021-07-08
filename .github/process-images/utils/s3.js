const fs = require('fs')
const path = require('path')
const pLimit = require('p-limit')
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3')
const { BUCKET_NAME, BUCKET_REGION } = process.env

const DEFAULT_MAX_CONCURRENT_TRANSFERS = 10
const s3 = new S3Client({
  region: BUCKET_REGION || 'us-east-1',
})

/**
 * Upload files to s3
 * @param {String} bucket
 * @param {[{ id: String, path: String }]} objects
 * @param {Object} [options={}]
 * @returns
 */
async function uploadObjects(bucketName, objects, options = {}) {
  const limit = pLimit(5)
  const fileStatuses = await Promise.all(
    (objects.map((obj) => {
      return limit(() => checkForItem(bucketName, obj))
    }))
  )

  /* Only upload unknown files */
  const unknownFiles = fileStatuses.filter((x) => {
    return !x.exists
  })

  if (!unknownFiles.length) {
    console.log('All files already uploaded')
    return fileStatuses
  }

  let maxTransfers = options.maxConcurrentTransfers || DEFAULT_MAX_CONCURRENT_TRANSFERS
  let uploaded = 0
  let modifiedUploadData = fileStatuses
  while (uploaded < unknownFiles.length) {
    const chunk = unknownFiles.slice(uploaded, uploaded + maxTransfers)
    await Promise.all(chunk.map(async ({ id, path: objectPath }) => {
      console.log(`Uploading file to ${bucketName}/${id}...`)
      const stream = fs.createReadStream(objectPath)
      const upload = new Promise((resolve) => stream.on('end', resolve))
      await s3.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: id,
        Body: stream,
      }))

      modifiedUploadData = modifiedUploadData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            exists: true,
            isNew: true,
            // todo updat size
          }
        }
        return item
      })
      return upload
    }))
    uploaded += chunk.length
  }

  return modifiedUploadData
}

async function checkForItem(bucketName, object) {
  const key = object.id
  let data = {}
  try {
    data = await s3.send(new HeadObjectCommand({
      Bucket: bucketName || BUCKET_NAME,
      Key: key,
    }))
  } catch (err) {
    return {
      id: key,
      path: object.path,
      exists: false,
      size: 0 
    }
  }
  console.log(`Item already exists in bucket "${bucketName}/${key}"`)
  return {
    id: key,
    path: object.path,
    exists: true,
    size: data.ContentLength 
  }
}

/*
const filePath = 'xyz.jpg'
checkForItem(filePath).then((d) => {
  console.log('d', d)
}).catch((e) => {
  console.log('e', e)
})
/**/

module.exports = {
  uploadObjects,
}