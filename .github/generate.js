const path = require('path')
const fs = require('fs').promises
const markdownMagic = require('markdown-magic')
const slugify = require('slugify')
const {
  getTags,
  getAuthors, 
  getCategories,
  getPostsByCategory,
  getPostsByAuthor,
  getPostsByTag,
  getExternalPosts,
  getMarkdownData,
  sortByDate,
  DATE_FORMAT_REGEX
} = require('./get-md-data')
const { convertDateToString } = require('./md-utils/utils')
const stringBreak = require('./utils/string-break')

let fullMarkdownData = []
let filteredMarkdownData = []

const SITE_URL = 'https://www.vendia.com'
const BLOG_URL = `${SITE_URL}/blog`
const DOCS_URL = `${SITE_URL}/docs`
const RELEASES_URL = `${SITE_URL}/releases`
const BASE_DIR = path.resolve(__dirname, '../')
const GENERATED_DIR = path.resolve(__dirname, '_generated')

const config = {
  transforms: {
    siteLink(_content, _options, ctx) {
      const url = ctx.originalPath
        .replace(/README\.md/i, '')
        .replace(/\.mdx?$/, '')
      return `### [Read this on the Vendia docs site](${DOCS_URL}/${url})`
    },
    async POSTS_TABLE() {
      const [ mdData ] = await getMarkdownData([
        'posts/**/*.md',
        'posts/**/*.mdx',
        '!CONTRIBUTING.md',
        '!README.md',
        '!node_modules/**'
      ])

      /* // debugger
      mdData.forEach((mdInfo) => {
        if (path.basename(mdInfo.file) === '2020-06-30-welcome-to-vendia.md') {
          console.log('mdInfo', mdInfo)
          process.exit(1)
        }
      })
      /** */

      fullMarkdownData = mdData

      const IGNORE_LIST = ['draft-example.md', 'typography.mdx']
      const mdDataToUse = mdData.filter((p) => {
        return !IGNORE_LIST.includes(path.basename(p.file))
      }).filter((p) => {
        return p && p.data && p.data.draft !== true 
      })

      filteredMarkdownData = mdDataToUse
      
      /* Make Markdown Table */
      let md = `| Post Details | Date Published | Post Actions |\n`;
      md +=    '|:-------------|:--------------:|:-----:|\n';
      mdDataToUse.sort(sortByDate('date')).forEach((item) => {
        // console.log('item', item)
        const { data, file } = item
        const fileName = path.basename(file)
        const postSlug = getSlug(fileName, data)
        const url = `${SITE_URL}/blog/${postSlug}`
        const desc = data.description.trim().replace(/\.$/, '')
        const formattedDescription = stringBreak(desc, 70).join('<br/>')
        const description = (data.description) ? `<br/>${formattedDescription}.` : ''
        const cmsLink = `https://www.vendia.com/blog/admin#/collections/posts/entries/${fileName.replace(/\.md$/, '')}`
        const editLink = `https://github.com/vendia/blog/edit/master/posts/${fileName}`
        const authors = (data.authors) ? `<br/><sup><sub>Written by ${data.authors.join(' + ')}.</sub></sup>` : ''
        // add table rows
        md += `| [${stringBreak(data.title, 80).join('<br/>')}](${url})${authors}${description} | ${convertDateToString(data.date)} | [✍️](${cmsLink} "Edit in CMS") - [🛠️](${editLink} "Edit on GitHub")\n`;
      })

      return md;
    },
    async AUTHORS_TABLE() {
      const { authors } = await getAuthors()
      // console.log('authors', authors)
      let max = longest(authors, 'name')
      // console.log('longest name', max)
      let md = `<table>\n <tr>`
      let count = 0

      const IGNORE_LIST = ['vendia']

      authors.filter(({ name, slug }) => {
        return !IGNORE_LIST.includes(name) && !IGNORE_LIST.includes(slug)
      }).forEach((person, i) => {
        const { twitter, github, name, avatar, slug } = person
        count = count + 1
        const isLast = i === (authors.length - 1)
        const newTr = (!isLast) ? '<tr>' : ''
        const closeTr = '\n</tr>\n'
        const twitterLink = (twitter) ? `https://twitter.com/${twitter}` : ''
        const githubLink = (github) ? `https://github.com/${github}` : ''
        const authorLink = `${SITE_URL}/blog/author/${slug}`
        const link = twitterLink || githubLink || authorLink || BLOG_URL
        const image = avatar || 'https://www.fillmurray.com/100/100'
        // Add row
        md += `
  <td align="center">
      <a href="${authorLink}">
        <img src="${image}" width="76px;" alt=""/>
      </a>
      <br />
      <a href="${link}"><sup><sub>${escapeName(name)}</sub></sup></a>
  </td>`
        // elements per table row
        const elementsPerRow = 8
        if (count > (elementsPerRow - 1)) {
          md += `${closeTr}${newTr}`
          count = 0
        }
      })
      md += `\n</table>`
    
      return md
       // Make sure to close table
       .replace(/<\/td>\n<\/table>/gmi, ' </td>\n</tr>\n</table>')
    },
    async RELEASES_TABLE() {
      const [ mdData ] = await getMarkdownData([
        'releases/**/*.md',
        'releases/**/*.mdx',
        '!CONTRIBUTING.md',
        '!README.md',
        '!node_modules/**'
      ])
      
      /* Make Markdown Table */
      let md = `| Releases Details | Published-Date | edit |\n`;
      md +=    '|:-----------------|:--------------:|:----:|\n';
      mdData.sort(sortByDate('date')).forEach((item) => {
        const { data, file } = item
        const fileName = path.basename(file)
        const postSlug = fileName.replace(/\.mdx?$/, '')
        const url = `${RELEASES_URL}/${postSlug}`
        const description = (data.description) ? `<br/> ${data.description.trim().replace(/\.$/, '')}` : ''
        const editLink = `https://github.com/vendia/blog/edit/master/releases/${fileName}`
        const authors = (data.authors) ? ` by ${data.authors.join(' + ')}` : ''
        // add table rows
        md += `| [${data.title}](${url}) ${description}${authors} | ${convertDateToString(data.date)} | [✍️](${editLink})\n`;
      })

      return md
    },
  },
}

function escapeName(name) {
  return name.replace(new RegExp('\\|', 'g'), '&#124;')
}

function longest(arr, prop) {
  return arr.reduce((n, c) => Math.max((c[prop] + '').length, n), 0)
}

function getSlug(file, data) {
  if (data.slug) {
    return data.slug
  }
  return file.replace(/\.mdx?$/, '').replace(DATE_FORMAT_REGEX, '')
}

const formatFns = {
  pages: formatReleaseSlug,
  posts: formatPostSlug,
  releases: formatReleaseSlug
}

async function saveSlugMap(data, kind) {
  /* Save post slug map for faster lookups in build */
  const slugMap = getSlugMap(data, BASE_DIR, formatFns[kind])
  // console.log('slugMap', slugMap)
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-by-slug.json`), JSON.stringify(slugMap, null, 2))
}

async function saveGeneratedIndexes(mdData, type = 'post') {
  const kind = type.match(/s$/) ? type : `${type}s`
  const externalPosts = await getExternalPosts()

  /* Save post category map for faster lookups in build */
  const posts = getPostsByCategory(mdData, externalPosts)
  // console.log('posts', posts)
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-by-category.json`), JSON.stringify(posts, null, 2))

  /* Save post tag map for faster lookups in build */
  const postByTag = getPostsByTag(mdData, externalPosts)
  // console.log('postByTag', postByTag)
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-by-tag.json`), JSON.stringify(postByTag, null, 2))
  
  /* Save all posts by authors for entity type */
  const postsByAuthor = getPostsByAuthor(mdData, externalPosts)
  // console.log('postsByAuthor', postsByAuthor)
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-by-author.json`), JSON.stringify(postsByAuthor, null, 2))
  
  /* Save all tags for entity type */
  const tags = getTags(mdData, externalPosts).reduce((acc, curr) => {
    acc[slugify(curr).toLowerCase()] = curr
    return acc
  }, {})
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-tags.json`), JSON.stringify(tags, null, 2))

  // console.log('tags', tags)
  return {
    postsByAuthor,
    postByTag
  }
}

function formatPostSlug(str = '') {
  return removeLeadingAndTrailingSlashes(
    removeDate(
      removeExt(str)
    )
  )
}

function formatReleaseSlug(str = '') {
  return removeLeadingAndTrailingSlashes(
    removeExt(str)
  )
}

function removeDate(str = '') {
  return str.replace(DATE_FORMAT_REGEX, '')
}

function removeExt(str = '') {
  return str.replace(/\.(.*)?$/i, '')
}

function removeLeadingAndTrailingSlashes(str = '') {
  return str.replace(/^\/|\/$/g, '')
}

function getSlugMap(data, baseDir, formatFn) {
  return data.reduce((acc, post) => {
    // console.log('post', post)
    const frontMatterSlug = post.data.slug || post.data.path
    let slug = (frontMatterSlug) ? frontMatterSlug : path.basename(post.file)
    const nicePath = post.file.replace(baseDir, '')
    if (formatFn) {
      slug = formatFn(slug)
    }
    /* Ensure no duplicate slugs are used */
    if (acc[slug]) {
      throw new Error(`Slug "${slug}" already exists in ${acc[slug]}. 
Change duplicate slug "${slug}" in ${nicePath} to fix this error.
`)
    }
    acc[slug] = { 
      file: nicePath,
      draft: Boolean(post.data.draft),
    }
    return acc
  }, {})
}

console.log('🏃‍♂️ Doc generation initialized...\n')
markdownMagic(['**/*.md', '!node_modules/**'], config, async () => {
  console.log('ℹ Generating index information...')
  // console.log('authorsData', authorsData)
  /* Generate & save blog post data */
  const { postsByAuthor } = await saveGeneratedIndexes(filteredMarkdownData, 'posts')
  // console.log('postsByAuthor', postsByAuthor)

  /* Save slug maps for posts */
  await saveSlugMap(fullMarkdownData, 'posts')
  /* Add post count to author data */
  let authorsData = await getAuthors()
  const updatedAuthors = authorsData.authors.map((author) => {
    const authorPosts = postsByAuthor[author.slug]
    return {
      ...author,
      postCount: (authorPosts) ? authorPosts.length : 0
    }
  })
  authorsData.authors = updatedAuthors
  await fs.writeFile(path.resolve(GENERATED_DIR, 'author-data.json'), JSON.stringify(authorsData, null, 2))

  /* Save releases data */
  const [ releaseMdData ] = await getMarkdownData([
    'releases/**/*.md',
    'releases/**/*.mdx',
    '!CONTRIBUTING.md',
    '!README.md',
    '!node_modules/**'
  ])
  await saveGeneratedIndexes(releaseMdData, 'releases')
  /* Save slug maps for releases */
  await saveSlugMap(releaseMdData, 'releases')

  /* Save releases data */
  const [ pageMdData ] = await getMarkdownData([
    'pages/**/*.md',
    'pages/**/*.mdx',
    '!node_modules/**'
  ])
  // console.log('pageMdData', pageMdData)
  // process.exit(1)
  /* Save slug maps for releases */
  await saveSlugMap(pageMdData, 'pages')
  console.log('✔ Generating index information complete')
  console.log('\n🎉 Doc generation complete\n')
})