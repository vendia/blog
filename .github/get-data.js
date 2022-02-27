const path = require('path')
const fs = require('fs').promises
const { globby } = require('markdown-magic')
const matter = require('gray-matter')
const slugify = require('slugify')
const { validateHtml, validateHtmlTags } = require('./md-utils/validate-html')
const { findFrontmatter } = require('./md-utils/find-frontmatter')
const { findHtmlTags } = require('./md-utils/find-html-tags')
const { findCodeBlocks } = require('./md-utils/find-code-blocks')
const { findRelativeLinks } = require('./md-utils/find-links-relative')
const { findLiveLinks } = require('./md-utils/find-links-live')
const { findImageLinks } = require('./md-utils/find-image-links')
const { findUnmatchedHtmlTags } = require('./md-utils/find-unmatched-html-tags')

let cache = {}
const cwd = process.cwd()
const DATE_FORMAT_REGEX = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-/g
const ROOT_DIR = path.dirname(__dirname)

const GLOB_PATTERN = [
  '**/*.md',
  '**/*.mdx',
  '!CONTRIBUTING.md',
  '!README.md',
  '!node_modules/**'
]

async function getMarkdownData(globPattern = GLOB_PATTERN, baseDir = cwd) {
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
  /* Ignore example posts */
  const IGNORE_LIST = ['draft-example.md', 'typography.mdx']
  const filePaths = matches
    .map((match) => path.resolve(baseDir, match))
    .filter((p) => {
      return !IGNORE_LIST.includes(path.basename(p))
    })

  const contents = (
    await Promise.all(filePaths.map((filePath) => {
      return fs.readFile(filePath, 'utf-8')
    }))
  ).map((content) => (content || '').trim())

  const data = contents.map((text, i) => {
    // console.log('contents', filePaths[i])
    const markdownData = formatMD(text, filePaths[i])
    // console.log(markdownData)
    if (markdownData.errors) {
      errors = errors.concat(markdownData.errors)
    }
    return markdownData
  }).sort(sortByDate('date'))
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
  const categoriesContents = await fs.readFile(path.join(cwd, 'categories/categories.json'), 'utf8')
  return JSON.parse(categoriesContents)
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

function getPostsByCategory(data) {
  return data.reduce((acc, post) => {
    // console.log('post.data', post.data)
    if (post.data.categories) {
      post.data.categories.forEach((category) => {
        acc[category] = (acc[category] || []).concat(formatIndexData(post))
      })
    }
    return acc
  }, {})
}

function getPostsByTag(data) {
  return data.reduce((acc, post) => {
    // console.log('post.data', post.data)
    if (post.data.tags) {
      post.data.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || []).concat(formatIndexData(post))
      })
    }
    return acc
  }, {})
}

function getPostsByAuthor(data) {
  return data.reduce((acc, post) => {
    // console.log('post.data', post.data)
    if (post.data.authors) {
      post.data.authors.forEach((author) => {
        const authorSlug = slugify(author).toLowerCase()
        acc[authorSlug] = (acc[authorSlug] || []).concat(formatIndexData(post))
      })
    }
    return acc
  }, {})
}

function getTags(data) {
  return data.reduce((tags, d) => {
    const postTags = d.data.tags || []
    const uniqueTags = new Set(tags.concat(postTags))
    tags = Array.from(uniqueTags)
    return tags
  }, [])
}

function formatIndexData(post, extra = {}) {
  return { 
    file: post.file.replace(ROOT_DIR, ''),
     ...post.data,
     ...extra
  }
}

function formatMD(text, filePath) {
  let errors = []
  const { frontMatter, rawFrontMatter } = findFrontmatter(text)
  
  /* Missing all frontmatter */
  if (!frontMatter) {
    errors.push(`Missing or broken frontmatter in ${filePath}. Double check file for --- frontmatter tags`)
  }

  const newContent = text
    // Replace frontmatter brackets
    .replace(rawFrontMatter, frontMatter)
    // Replace leading lines
    .replace(/---+\s+\n/g, '---\n')

  let frontmatter = { data: {} }
  try {
    frontmatter = matter(newContent)
  } catch(err) {
    console.log(`Broken frontmatter ${filePath}`)
    console.log(err.message)
    console.log('Failed on frontmatter:')
    console.log(rawFrontMatter)
    errors.push(`Broken frontmatter in ${filePath}\n  ${rawFrontMatter}`)
  }

  const { links } = findLiveLinks(text, filePath)
  // console.log(`links ${filePath}`, links)
  const relativeLinks = findRelativeLinks(text)
  // console.log(`relativeLinks ${filePath}`, relativeLinks)
  const images = findImageLinks(links.concat(relativeLinks))
  // console.log(`images ${filePath}`, images)
  const htmlTags = findHtmlTags(text)
  // console.log(`htmlTags ${filePath}`, htmlTags)
  const codeBlocks = findCodeBlocks(text, filePath)
  // console.log(`codeBlocks ${filePath}`, codeBlocks)
  const tagsErrors = findUnmatchedHtmlTags(text, filePath)

  // const htmlValidationTags = validateHtmlTags(htmlTags, filePath)
  // if (htmlValidationTags && htmlValidationTags.length) {
  //   errors = errors.concat(htmlValidationTags)
  // }

  const htmlValidation = validateHtml(frontmatter.content, filePath)
  if (htmlValidation && htmlValidation.length) {
    errors = errors.concat(htmlValidation)
  }

  if (tagsErrors && tagsErrors.length) {
    errors = errors.concat(tagsErrors)
  }

  if (codeBlocks.errors && codeBlocks.errors.length) {
    errors = errors.concat(codeBlocks.errors)
  }

  return {
    errors,
    file: filePath,
    ...(frontmatter.data.date) ? { date : frontmatter.data.date } : {},
    links: links,
    relativeLinks,
    images: images,
    htmlTags: htmlTags,
    codeBlocks,
    frontMatterRaw: rawFrontMatter,
    ...frontmatter
  }
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
  getMarkdownData,
  getLinks: findLiveLinks,
  getImageLinks: findImageLinks,
  getCategories,
  getAuthors,
  getTags,
  getPostsByCategory,
  getPostsByAuthor,
  getPostsByTag,
  sortByDate,
  DATE_FORMAT_REGEX
}