const path = require('path')
const { URL } = require('url')
const { download } = require('./utils/download')
const { getLinks, getImageLinks, getMarkdownData } = require('../utils')

const debugLog = (process.env.DEBUG) ? console.log : () => {}

async function collectImages({
  outputDir,
  markdownGlob = [],
  exclude = [],
  include = []
}) {
  const [ mdData ] = await getMarkdownData(markdownGlob)
  // debugLog('mdData', mdData)

  const imageData = mdData.reduce((acc, mdInfo) => {
    const { links } = getLinks(mdInfo.content)
    const foundImages = getImageLinks(links).map((link) => {
      return [ link, mdInfo.file ]
    })
    const uniqueTags = new Set(foundImages.concat(acc.images))
    acc.images = Array.from(uniqueTags)
    foundImages.forEach((img) => {
      if (!acc.byFile[mdInfo.file]) {
        acc.byFile[mdInfo.file] = []
      }
      acc.byFile[mdInfo.file] = acc.byFile[mdInfo.file].concat(img[0])
    })
    return acc
  }, {
    byFile: {},
    images: []
  })
  debugLog('imageData', imageData)
  
  /* Exclude patterns */
  const trimmedList = imageData.images.filter(([url]) => {
    return !exclude.some((pat) => url.match(makeRegex(pat)))
  })
  // console.log('trimmedList', trimmedList)
  /* Re-include includee patterns */
  const includeList = imageData.images.filter(([url]) => {
    return include.some((pat) => url.match(makeRegex(pat)))
  })
  // console.log('includeList', includeList)

  const imagesToProcess = trimmedList.concat(includeList)
  // console.log('imagesToProcess', imagesToProcess)

  // Download
  const dowloadPromises = imagesToProcess.map(([ url, filePath ]) => {
    const imagePathName = generateFileName(url)
    return download({
      url,
      outputPath: path.join(outputDir, imagePathName),
      meta: {
        originalUrl: url,
        updatedFileName: imagePathName,
        location: filePath
      },
    })
  })

  const downloadedImages = await Promise.all(dowloadPromises)
  // console.log('downloadedImages', downloadedImages)
  return { 
   downloadedImages,
   imageData,
   imagesToProcess
  }
}

function generateFileName(url, slashChange = '..') {
  const imageUrl = new URL(url)
  const host = imageUrl.host.replace(/\./g, '.')
  const imageDir = path.dirname(imageUrl.pathname).replace(/\//g, slashChange)
  const imageFileName = path.basename(url)
  const imagePathName = `${host}${imageDir}${slashChange}${imageFileName}`
  return imagePathName
}

function makeRegex(pattern, modifier = '', ) {
  return (pattern instanceof RegExp) ? pattern : new RegExp(escapeStringRegexp(pattern), modifier)
}

function escapeStringRegexp(string) {
  let newString = string
  const startsWith = newString.match(/^(\^)?[^^]/)
  // Starts with single caret ^ sign
  if (startsWith) {
    newString = newString.replace(/^\^/, 'CARET_PLACEHOLDER')
  }
  const endsWith = newString.match(/[^$](\$)$/)
  // Ends with single dollar $ sign
  if (endsWith) {
    newString = newString.replace(/\$$/, 'DOLLAR_PLACEHOLDER')
  }
	return newString
    .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
    .replace(/-/g, '\\x2d')
    .replace(/^CARET_PLACEHOLDER/, '^')
    .replace(/DOLLAR_PLACEHOLDER$/, '$')
}

module.exports = {
  collectImages,
  makeRegex
}