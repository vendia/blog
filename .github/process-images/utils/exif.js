const { ExifTool } = require("exiftool-vendored")

async function readImageMeta(images) {
  const exiftool = new ExifTool({ taskTimeoutMillis: 5000 })
  const meta = images.map(async (imagePath) => {
    // console.log('readImageMeta', imagePath)
    let data = {}
    try {
      // alt npmjs.com/package/exifr
      data = await exiftool.read(imagePath)
    } catch (e) {
      console.log('readImageMeta Error', e)
    }
    return data
  })

  const allMeta = await Promise.all(meta)
  // Close exiftool
  exiftool.end()
  // return data
  return allMeta
}

async function writeImageMeta(imageDetails) {
  const exiftool = new ExifTool({ taskTimeoutMillis: 5000 })
  const meta = imageDetails.map(async (img) => {
    let data = {}
    try {
      const metaToSave = JSON.stringify(img.meta)
      data = await exiftool.write(img.filePath, {
        Comment: metaToSave,
      })
    } catch (e) {
      console.log('e', e)
    }
    return data
  })

  const allMeta = await Promise.all(meta)
  // Close exiftool
  exiftool.end()
  // return data
  return allMeta
}

module.exports = {
  readImageMeta,
  writeImageMeta,
}