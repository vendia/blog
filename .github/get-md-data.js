const path = require('path')
const fs = require('fs').promises
const slugify = require('slugify')
const { globby } = require('markdown-magic')
const { parseMarkdown } = require('./md-utils/parse')
const { deepLog } = require('./utils/logs')

let cache = {}
const cwd = process.cwd()
const DATE_FORMAT_REGEX = /(([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))-?/g
const ROOT_DIR = path.dirname(__dirname)

const GLOB_PATTERN = [
  '**/*.md',
  '**/*.mdx',
  '!CONTRIBUTING.md',
  '!README.md',
  '!node_modules/**'
]

async function getMarkdownData(globPattern = GLOB_PATTERN, opts = {}) {
  const {
    baseDir = cwd,
    ignoreList = []
  } = opts
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

  let filePaths = matches.map((match) => path.resolve(baseDir, match))
  /* Ignore files */
  if (ignoreList.length) {
    filePaths = filePaths.filter((p) => {
      return !ignoreList.includes(path.basename(p))
    })
  }
  // console.log('filePaths', filePaths)
  const contents = (
    await Promise.all(filePaths.map((filePath) => {
      return fs.readFile(filePath, 'utf-8')
    }))
  ).map((content) => (content || '').trim())

  const data = contents.map((text, i) => {
    const markdownData = parseMarkdown(text, { filePath: filePaths[i] })
    // console.log(markdownData)
    if (markdownData.errors) {
      errors = errors.concat(markdownData.errors)
    }
    return markdownData
  })
  .sort(sortByDate('date'))
  // console.log('data', data)
  // process.exit(1)

  cache[cacheKey] = {
    data: data,
    paths: filePaths,
    errors: errors
  }

  return [
    data, 
    errors, 
    filePaths 
  ]
}

async function getCategories() {
  const categoriesContents = await fs.readFile(path.join(cwd, 'settings/categories.json'), 'utf8')
  const data = JSON.parse(categoriesContents)
  return data.categories || data
}

async function getExternalPosts() {
  const externalPosts = await fs.readFile(path.join(cwd, 'posts/external-posts.json'), 'utf8')
  return JSON.parse(externalPosts)
}

async function getAuthors() {
  const authors = await globby(['authors/*.json'], { cwd })
  const authorSlugs = authors.map((author) => {
    return path.basename(author, '.json').toLowerCase()
  })

  const authorContents = await Promise.all(authors.map((filePath) => {
    return fs.readFile(path.resolve(cwd, filePath), 'utf8')
  }))

  const authorData = authorContents.map((contents, i) => {
    return {
      ...JSON.parse(contents),
      ...{
        slug: authorSlugs[i].toLowerCase()
      }
    }
  })

  return {
    slugs: authorSlugs,
    authors: authorData
  }
}

function getPostsByCategory(data, additionalContent = []) {
  return data.concat(additionalContent).reduce((acc, post) => {
    const categories = (post.data && post.data.categories) ? post.data.categories : post.categories
    // console.log('post.data', post.data)
    if (categories) {
      categories.forEach((category) => {
        acc[category] = (acc[category] || []).concat(formatIndexData(post))
      })
    }
    return acc
  }, {})
}

function getPostsByTag(data, additionalContent = []) {
  return data.concat(additionalContent).reduce((acc, post) => {
    const tags = (post.data && post.data.tags) ? post.data.tags : post.tags
    // console.log('post.data', post.data)
    if (tags) {
      tags.forEach((tag) => {
        acc[tag] = (acc[tag] || []).concat(formatIndexData(post))
      })
    }
    return acc
  }, {})
}

function getPostsByAuthor(data, additionalContent = []) {
  return data.concat(additionalContent).reduce((acc, post) => {
    const authors = (post.data && post.data.authors) ? post.data.authors : post.authors
    // console.log('post.data', post.data)
    if (authors) {
      authors.forEach((author) => {
        const authorSlug = slugify(author).toLowerCase()
        acc[authorSlug] = (acc[authorSlug] || []).concat(formatIndexData(post))
      })
    }
    return acc
  }, {})
}

function getTags(data, additionalContent = []) {
  return data.concat(additionalContent).reduce((tags, d) => {
    const postTags = (d.data && d.data.tags) ? d.data.tags : (d.tags || [])
    const uniqueTags = new Set(tags.concat(postTags))
    tags = Array.from(uniqueTags)
    return tags
  }, [])
}

function formatIndexData(post, extra = {}) {
  if (post.data) {
    return {
      file: post.file.replace(ROOT_DIR, ''),
       ...post.data,
       ...extra
    }
  }
  return post
}

function fixImageTags(content) {
  const removeTrailingImg = /<\/img>/gm 
  const fixMissingClosingImgTag = /(<img("[^"]*"|[^>])+)(?<!\/)>/gm

  return content
    .replace(removeTrailingImg, '')
    .replace(fixMissingClosingImgTag, '$1/>')
}

function sortByDate(dateKey = 'date', order) {
  return function (a, b) {
    const timeA = new Date(a[dateKey]).getTime()
    const timeB = new Date(b[dateKey]).getTime()
    if (order === 'asc') {
      return timeA - timeB
    }
    // default 'desc' descending order
    return timeB - timeA
  }
}

module.exports = {
  parseMarkdown,
  getMarkdownData,
  getCategories,
  getAuthors,
  getTags,
  getPostsByCategory,
  getPostsByAuthor,
  getPostsByTag,
  getExternalPosts,
  sortByDate,
  DATE_FORMAT_REGEX
}