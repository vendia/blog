const path = require('path')
const { URL } = require('url')
const { download } = require('./utils/download')
const { getMarkdownData } = require('../get-md-data')
const { findLiveImages, findRelativeImages } = require('../md-utils/find-images')
const { findLiveLinks } = require('../md-utils/find-links')
const { deepLog } = require('../utils/logs')

const debug = true || process.env.DEBUG
const debugLog = (debug) ? console.log : () => {}

async function collectImages({
  outputDir,
  markdownGlob = [],
  exclude = [],
  include = []
}) {
  let missingLinks = []
  const [ mdData ] = await getMarkdownData(markdownGlob)
  // debugLog('mdData', mdData)
  // console.log(mdData)
  // process.exit(1)

  const imageData = mdData.reduce((acc, mdInfo) => {
    const { content } = mdInfo

    const foundImages = findLiveImages(content).map((link) => {
      return [ link, mdInfo.file ]
    }).filter(([ link, file ]) => {
      if (!link) {
        missingLinks.push(`${file} has broken links`)
      }
      return Boolean(link)
    })
    /* // Debugger
    const fileNameToCheck = '2020-06-30-welcome-to-vendia.md'
    if (path.basename(mdInfo.file) === fileNameToCheck) {
      const relativeImages = findRelativeImages(mdInfo.content, mdInfo.file)
      const liveImages = findLiveImages(mdInfo.content, mdInfo.file)
      console.log('liveImages', liveImages)
      console.log('relativeImages', relativeImages)
      console.log('foundImages', foundImages)
      console.log('mdInfo')
      deepLog(mdInfo)
      process.exit(1)
    }
    /** */
    const uniqueTags = new Set(foundImages.concat(acc.images))
    acc.images = Array.from(uniqueTags)
    foundImages.forEach((img) => {
      /* Ensure image url exists. to avoid empty ![]() */
      if (img[0]) {
        /* Initialize array if it doesnt exist yet */
        if (!acc.byFile[mdInfo.file]) {
          acc.byFile[mdInfo.file] = []
        }
        acc.byFile[mdInfo.file] = acc.byFile[mdInfo.file].concat(img[0])
      }
    })
    return acc
  }, {
    byFile: {},
    images: []
  })
  debugLog('imageData', imageData)
  if (missingLinks.length) {
    console.log('missingLinks:')
    console.log(missingLinks)
  }
  
  // process.exit(1)
  /* Exclude patterns */
  const trimmedList = imageData.images.filter(([url]) => {
    return !exclude.some((pat) => url.match(makeRegex(pat)))
  })
  // console.log('trimmedList', trimmedList)
  /* Re-include include patterns */
  const includeList = imageData.images.filter(([url]) => {
    return include.some((pat) => url.match(makeRegex(pat)))
  })
  // console.log('includeList', includeList)

  const imagesToProcess = trimmedList.concat(includeList)
  // console.log('imagesToProcess', imagesToProcess)
  // process.exit(1)

  // Download
  const dowloadPromises = imagesToProcess.map(([ url, filePath ]) => {
    const imagePathName = encodeFileName(url)
    const downloadInfo = {
      url,
      outputPath: path.join(outputDir, imagePathName),
      meta: {
        originalUrl: url,
        updatedFileName: imagePathName,
        location: filePath
      },
    }
    // console.log('downloadInfo', downloadInfo)
    return download(downloadInfo)
  })

  const downloadedImages = await Promise.all(dowloadPromises)
  // console.log('downloadedImages', downloadedImages)
  // process.exit(1)
  return {
   downloadedImages,
   imageData,
   imagesToProcess
  }
}

function encodeFileName(url) {
  const imageUrl = new URL(url)
  const newPath = encodeURIComponent(`${imageUrl.host}${imageUrl.pathname}`)
  return newPath
}

function decodeFileName(fileName) {
  return decodeURIComponent(fileName)
}

function oldGenerateFileName(url, slashChange = '_-_') {
  const imageUrl = new URL(url)
  const host = imageUrl.host.replace(/\./g, '.')
  const imageDir = path.dirname(imageUrl.pathname).replace(/\//g, slashChange)
  const imageFileName = path.basename(url)
  const imagePathName = `${host}${imageDir}${slashChange}${imageFileName}`
  // const newPath = encodeURIComponent(`${imageUrl.host}${imageUrl.pathname}`)
  return imagePathName
}

function makeRegex(pattern, modifier = '') {
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