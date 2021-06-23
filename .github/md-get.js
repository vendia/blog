const path = require('path')
const fs = require('fs').promises
const { globby } = require('markdown-magic')
const formatMD = require('./md-format')
const cwd = process.cwd()

const GLOB_PATTERN = [
  '**/*.md',
  '**/*.mdx',
  '!CONTRIBUTING.md',
  '!README.md',
  '!node_modules/**'
]

let cache = {}

async function getMdFiles(globPattern = GLOB_PATTERN, baseDir = cwd) {
  const cacheKey = globPattern.toString()
  const matches = await globby(globPattern)
  /* return if cached */
  if (cache[cacheKey] && cache[cacheKey].data && cache[cacheKey].errors && cache[cacheKey].paths) {
    const { data, errors, paths} = cache[cacheKey]
    if (data && errors && paths) {
      // console.log('cache hit')
      return [ data, errors, paths ]
    }
  }
  let errors = []
  const filePaths = matches.map((match) => path.resolve(baseDir, match))

  const contents = (
    await Promise.all(filePaths.map((filePath) => {
      return fs.readFile(filePath, 'utf-8')
    }))
  ).map((content) => (content || '').trim())

  const data = contents.map((text, i) => {
    const markdownData = formatMD(text, filePaths[i])
    if (markdownData.errors) {
      errors = errors.concat(markdownData.errors)
    }
    return markdownData
  })

  cache[cacheKey] = {
    data: data,
    paths: filePaths,
    errors: errors
  }

  return [ data, errors, filePaths ]
}

module.exports = getMdFiles