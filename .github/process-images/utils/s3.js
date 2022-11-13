const fs = require('fs')
const path = require('path')
const mime = require('mime-types')
const pLimit = require('p-limit')
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3')

const {
  S3_AWS_ACCESS_KEY_ID,
  S3_AWS_SECRET_ACCESS_KEY,
  S3_BUCKET_NAME, 
  S3_BUCKET_REGION
} = process.env

const DEFAULT_MAX_CONCURRENT_TRANSFERS = 10
const s3 = new S3Client({
  region: S3_BUCKET_REGION || 'us-east-1',
  // Set access key & secret if provided, else use local default profile
  ...(S3_AWS_ACCESS_KEY_ID && S3_AWS_SECRET_ACCESS_KEY) ? {
    credentials: {
      accessKeyId: S3_AWS_ACCESS_KEY_ID,
      secretAccessKey: S3_AWS_SECRET_ACCESS_KEY
    }
  } : {}
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
      return limit(() => checkForItem(bucketName, obj, options.cdnPrefix))
    }))
  )
  // console.log('fileStatuses', fileStatuses)

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
      console.log(`Uploading file to s3 ${bucketName}/${id}...`)
      // console.log('objectPath', objectPath)
      const stream = fs.createReadStream(objectPath)
      const upload = new Promise((resolve) => stream.on('end', resolve))
      await s3.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: id,
        Body: stream,
        ContentType: mime.lookup(objectPath),
      }))

      modifiedUploadData = modifiedUploadData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            exists: true,
            isNew: true,
            // todo update size
          }
        }
        return item
      })
      return upload
    })).catch((err) => {
      console.log('s3 error', err)
    })
    uploaded += chunk.length
  }

  return modifiedUploadData
}

async function checkForItem(bucketName, object, cdnPrefix) {
  const bucket = bucketName || S3_BUCKET_NAME
  const key = object.id
  let data = {}
  try {
    data = await s3.send(new HeadObjectCommand({
      Bucket: bucket,
      Key: key,
    }))
  } catch (err) {
    // console.log('err', err)
    return {
      id: key,
      path: object.path,
      exists: false,
      size: 0,
      uri: getS3Url({ bucketName: bucket, key, cdnPrefix }),
    }
  }
  console.log(`Item already exists in bucket "${bucketName}/${key}"`)
  return {
    id: key,
    path: object.path,
    exists: true,
    size: data.ContentLength,
    uri: getS3Url({ bucketName: bucket, key, cdnPrefix }),
  }
}

// Because s3 urls are annoying
function getS3Url({
  bucketName,
  cdnPrefix,
  key,
}) {
  const encodedKey = encodeS3URI(key)
  return {
    key: encodedKey,
    s3: `https://${bucketName}.s3.amazonaws.com/${encodedKey}`,
    ...(cdnPrefix) ? { cdn: `${cdnPrefix}/${encodedKey}` } : {}
  }
}

const encodings = {
  '\+': "%2B",
  '\!': "%21",
  '\"': "%22",
  '\#': "%23",
  '\$': "%24",
  '\&': "%26",
  '\'': "%27",
  '\(': "%28",
  '\)': "%29",
  '\*': "%2A",
  '\,': "%2C",
  '\:': "%3A",
  '\;': "%3B",
  '\=': "%3D",
  '\?': "%3F",
  '\@': "%40",
};

function encodeS3URI(filename) {
  return encodeURI(filename) // Do the standard url encoding
    .replace(
        /(\+|!|"|#|\$|&|'|\(|\)|\*|\+|,|:|;|=|\?|@)/img,
        function(match) { return encodings[match]; }
    );
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
  encodeS3URI,
}