
const fs = require('fs')
const path = require('path')
const got = require('got')

const fileExists = (s) => new Promise(r => fs.access(s, fs.F_OK, e => r(!e)))

/**
 * @typedef Download
 * @property {boolean} cached - If download already existed locally
 * @property {string}  output - Output file path
 * @property {string}  url - Original download url
 * @property {object}  meta - Additional meta
 */


/**
 * @param  {object}  options - Download options
 * @param  {string}  options.url - Url to download
 * @param  {string}  options.outputPath - Output file path
 * @param  {boolean} [options.forceDownload] - Ignore locally cached files
 * @param  {object}  [options.meta] - Optional additional meta to pass along with object
 * @returns {Promise<Download>}
 */
async function download({ 
  url, 
  outputPath,
  forceDownload,
  meta
}) {
  if (!forceDownload) {
    const existsAlready = await fileExists(outputPath)
    // Ignore download if we already have file
    if (existsAlready) {
      console.log(`✓ already downloaded\n "${url}"`)
      return {
        url: url,
        output: outputPath,
        cached: true,
        meta: meta
      }
    }
  }
  
  // Ensure directory exists
  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true })

  return new Promise((resolve, reject) => {
    got.stream(url)
      .on('error', err => {
        console.log(`Error on ${url}`)
        reject(err)
      })
      .pipe(fs.createWriteStream(outputPath))
      .on('error', err => {
        console.log(`Error on ${url}`)
        reject(err)
      })
      .on('finish', () => {
        console.log(`File ${url} persisted to ${outputPath.replace(process.cwd(), '')}`)
        resolve({
          url: url,
          output: outputPath,
          cached: false,
          meta: meta
        })
      })
  })
}

module.exports = {
  download
}