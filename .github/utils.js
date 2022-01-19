const path = require('path')
const fs = require('fs').promises
const { globby } = require('markdown-magic')
const matter = require('gray-matter')
const slugify = require('slugify')
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
    // console.log('contents', filePaths[i])
    const markdownData = formatMD(text, filePaths[i])
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

function formatIndexData(post, extra = {}) {
  return { 
    file: post.file.replace(ROOT_DIR, ''),
     ...post.data,
     ...extra
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

const HIDDEN_FRONTMATTER_REGEX = /^<!--.*((.|\r?\n)*?.*-->)/g
const FRONTMATTER_REGEX = /^---.*((.|\r?\n)*?.*---)/g

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

  const { links } = getLinks(text, filePath)
  // console.log('links', links)
  const relativeLinks = getRelativeLinks(text)
  // console.log('relativeLinks', relativeLinks)
  // console.log(`links ${filePath}`, filePath)
  const images = getImageLinks(links.concat(relativeLinks))
  // console.log(`images ${filePath}`, images)
  const htmlTags = parseHtmlProps(text)
  // console.log(`htmlTags ${filePath}`, htmlTags)

  return {
    errors,
    file: filePath,
    ...(frontmatter.data.date) ? { date : frontmatter.data.date } : {},
    links: links,
    relativeLinks,
    images: images,
    htmlTags: htmlTags,
    frontMatterRaw: replaceText,
    ...frontmatter
  }
}

const FIND_LIVE_LINKS = /(?:['"(])((?:https?:\/\/)[\w\d-_./?=#%:+&]{3,})/gmi

// https://regex101.com/r/Nywerx/1
const FIND_RELATIVE_LINKS = /(src|href|\()=?(['"/])(?!(?:(?:https?|ftp):\/\/|data:))(\.?\/)?([\w\d-_./?=#%:+&]+)(?:['")])?/gim

// https://regex101.com/r/Uxgu3P/1
const FIND_RELATIVE_IMAGES = /(<img.*?src=['"])(?!(?:(?:https?|ftp):\/\/|data:))(\.?\/)?(.*?)(['"].*?\/?>)/gim

// Might need ([\s\S]*?) instead of '*' in between tags
const HTML_TAG = /<([a-zA-Z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gim

const MATCH_HTML_TAGS_REGEX = /<([a-zA-Z1-6]+)\b([^>]*)>*(?:>([\s\S]*?)<\/\1>|\s?\/?>)/gm
// old forces closes / - /<([a-zA-Z1-6]+)\b([^>]*)>*(?:>([\s\S]*?)<\/\1>|\s?\/>)/gm

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

/*
Match relative links

<h1 jdjdjjdjd=lksjskljfsdlk="jdjdj">Netlify + FaunaDB &nbsp;&nbsp;&nbsp; 
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-faunadb-example&stack=fauna">
  <img src="../../../../img/deploy/lol.svg">
  </a>
</h1>

[link](/my-great-page)

<img src="img/deploy/duplicate.svg" />

<img src="img/deploy/duplicate.svg" >

<img src="/img/deploy/three.svg" />

<img src='/img/deploy/four.svg' />

<img src='./img/deploy/five.svg' />

<img src='../img/deploy/button.svg' />

<img src='../../img/deploy/button.svg' />

<img src="https://www.netlify.com/img/deploy/button.svg" />

<img src="https://www.netlify.com/img/deploy/button.svg" />

![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")
*/

// https://regex101.com/r/Nywerx/1
function getRelativeLinks(block) {
  // console.log('closeTagRegex', closeTagRegex)
  let matches
  let relLinks = []
  while ((matches = FIND_RELATIVE_LINKS.exec(block)) !== null) {
    if (matches.index === FIND_RELATIVE_LINKS.lastIndex) {
      FIND_RELATIVE_LINKS.lastIndex++ // avoid infinite loops with zero-width matches
    }
    // console.log(matches)
    const [ match, _, start, link, x ] = matches
    const one = (start === '/') ? start : ''
    const two = (link === '/') ? link : ''
    relLinks.push(`${one}${two}${x}`)
  }
  return relLinks.filter(onlyUnique)
}

/*
// https://regex101.com/r/SvMfme/1
<img src="img/deploy/button.svg" />
<img src="/img/deploy/button.svg" />
<img src='/img/deploy/button.svg' />
<img src='./img/deploy/button.svg' />
<img src='../img/deploy/button.svg' />
<img src='../../img/deploy/button.svg' />
*/
function getRelativeImageLinks(block, filePath) {
  // console.log('closeTagRegex', closeTagRegex)
  let matches
  let relLinks = []
  while ((matches = FIND_RELATIVE_IMAGES.exec(block)) !== null) {
    if (matches.index === FIND_RELATIVE_IMAGES.lastIndex) {
      FIND_RELATIVE_IMAGES.lastIndex++ // avoid infinite loops with zero-width matches
    }
    const [ match, _, start, link ] = matches
    relLinks.push(`${start || ''}${link}`)
  }
  return  { 
    links: relLinks,
    filePath
  }
}

function getLinks(mdContents, filePath) {
  const matches = mdContents.match(FIND_LIVE_LINKS)
  if (!matches) {
    return {
      links: [],
      filePath
    }
  }
  const links = matches
    .map((m) => m.replace(/^['"(]/, ''))
    .filter(onlyUnique)
  return { 
    links: links,
    filePath
  }
}

function parseHtmlProps(mdContents) {
  const parents = mdContents
    /* Fix non terminating <tags> */
    .replace(/(['"`]<(.*)>['"`])/gm, '_$2_')
    .match(MATCH_HTML_TAGS_REGEX)
  // console.log('parents', parents)

  if (parents) {
    // const children = parents.filter(Boolean).map((p) => {
    //   return p.match(HTML_TAG)
    // })
    // console.log('children', children)
  }

  const htmlTags = mdContents
    /* Fix non terminating <tags> */
    .replace(/(['"`]<(.*)>['"`])/gm, '_$2_')
    .match(MATCH_HTML_TAGS_REGEX)
  // console.log('htmlTags', htmlTags)

  let tags = []
  if (htmlTags) {
    let propsValues = {}
    // var regexSingleTag = /<([a-zA-Z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/
    // var regexSingleTag = /<([a-zA-Z1-6]+)([^<]+)*(?:>([\s\S]*?)<\/\1>|\s*\/>)/
    var regexSingleTag = /<([a-zA-Z1-6]+)\b([^>]*)>*(?:>([\s\S]*?)<\/\1>|\s?\/?>)/
    for (var i = 0; i < htmlTags.length; i++) {
      // console.log('htmlTags[i]', htmlTags[i])
      var tagMatches = regexSingleTag.exec(htmlTags[i])
      // console.log('tagMatches', tagMatches)
      var [ match, tag, props ] = tagMatches
      // console.log(`Tag #${i} ${tag}`)
      if (props) {
        const cleanProps = props
          // Remove new lines and tabs
          .replace(/\n\t/g, '')
          // Remove extra spaces
          .replace(/\s\s+/g, ' ')
          .trim()

        propsValues = cleanProps.split(" ").reduce((acc, curr) => {
          const hasQuotes = curr.match(/=['"]/)
          // Check key="value" | key='value' |  key={value}
          const propWithValue = /([A-Za-z-_$]+)=['{"](.*)['}"]/g.exec(curr)
          if (propWithValue && propWithValue[1]) {
            return {
              ...acc,
              [`${propWithValue[1]}`]: (hasQuotes) ? propWithValue[2] : convert(propWithValue[2])
            }
          }
          // Check isLoading boolean props
          const booleanProp = curr.match(/([A-Za-z]*)/)
          if (booleanProp && booleanProp[1]) {
            return {
              ...acc,
              [`${booleanProp[1]}`]: true
            }
          }
          return acc
        }, {})
      }

      tags.push({
        tag: tag,
        props: propsValues,
        raw: match
      })
    }
  }
  return tags
}

function convert(value) {
  if (value === 'false') {
    return false
  }
  if (value === 'true') {
    return true
  }
  const isNumber = Number(value)
  if (typeof isNumber === 'number' && !isNaN(isNumber)) {
    return isNumber
  }

  try {
    const val = JSON.parse(value)
    return val
  } catch (err) {
    
  }

  return value
}

function fixImageTags(content) {
  const removeTrailingImg = /<\/img>/gm 
  const fixMissingClosingImgTag = /(<img("[^"]*"|[^>])+)(?<!\/)>/gm

  return content
    .replace(removeTrailingImg, '')
    .replace(fixMissingClosingImgTag, '$1/>')
}

/**
 * Get image links
 * @param {array|string} linksOrText
 * @returns {array}
 */
function getImageLinks(linksOrText) {
  let links = linksOrText
  if (!Array.isArray(linksOrText)) {
    const linkData = getLinks(linksOrText)
    links = linkData.links.concat(getRelativeLinks(linksOrText))
  }
  const imageLinks = links.filter((link) => {
    return link.match(/(png|jpe?g|gif|webp|svg)$/)
  })
  return imageLinks
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
  getLinks,
  getImageLinks,
  getCategories,
  getAuthors,
  getTags,
  getPostsByCategory,
  getPostsByAuthor,
  getPostsByTag,
  sortByDate,
  DATE_FORMAT_REGEX
}