const path = require('path')
const fs = require('fs').promises
const { globby } = require('markdown-magic')
const matter = require('gray-matter')
const cwd = process.cwd()

const DATE_FORMAT_REGEX = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-/g

const GLOB_PATTERN = [
  '**/*.md',
  '**/*.mdx',
  '!CONTRIBUTING.md',
  '!README.md',
  '!node_modules/**'
]

let cache = {}
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

async function getCategories() {
  const categoriesContents = await fs.readFile(path.join(cwd, 'categories/categories.json'), 'utf8')
  return JSON.parse(categoriesContents)
}

async function getAuthors() {
  const authors = await globby(['authors/*.json'], { cwd })
  const authorSlugs = authors.map((author) => {
    return path.basename(author, '.json')
  })

  const authorContents = await Promise.all(authors.map((filePath) => {
    return fs.readFile(path.resolve(cwd, filePath), 'utf8')
  }))

  const authorData = authorContents.map((contents, i) => {
    return {
      ...JSON.parse(contents),
      ...{
        slug: authorSlugs[i]
      }
    }
  })

  return {
    slugs: authorSlugs,
    authors: authorData
  }
}

function getTags(data) {
  return data.reduce((tags, d) => {
    const postTags = d.data.tags || []
    const uniqueTags = new Set(tags.concat(postTags))
    tags = Array.from(uniqueTags)
    return tags
  }, [])
}

const HIDDEN_FRONTMATTER_REGEX = /^<!--.*((.|\n)*?.*-->)/g
const FRONTMATTER_REGEX = /^---.*((.|\n)*?.*---)/g

function formatMD(text, filePath) {
  const errors = []
  const hasFrontMatter = text.match(FRONTMATTER_REGEX)
  const hasHiddenFrontMatter = text.match(HIDDEN_FRONTMATTER_REGEX)
  
  /* Missing all frontmatter */
  if (!hasFrontMatter && !hasHiddenFrontMatter) {
    errors.push(`Missing or broken frontmatter in ${filePath}`)
  }

  const match = hasFrontMatter || hasHiddenFrontMatter
  const replaceText = (match) ? match[0] : ''
  const cleanText = replaceText
    // Leading frontmatter brackets
    .replace(/<!--+/, '---')
    // Trailing frontmatter brackets
    .replace(/--+>/, `---`)
  const newContent = text
    // Replace frontmatter brackets
    .replace(replaceText, cleanText)
    // Replace leading lines
    .replace(/---+\s+\n/g, '---\n')

  let frontmatter = { data: {} }
  try {
    frontmatter = matter(newContent)
  } catch(err) {
    console.log(`Broken frontmatter ${filePath}`)
    console.log(err.message)
    console.log('Failed on frontmatter:')
    console.log(replaceText)
    errors.push(`Broken frontmatter in ${filePath}`)
  }

  return {
    errors,
    file: filePath,
    frontMatterRaw: replaceText,
    ...frontmatter
  }
}

module.exports = {
  getMarkdownData,
  getCategories,
  getAuthors,
  getTags,
  DATE_FORMAT_REGEX
}