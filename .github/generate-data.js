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
} = require('./get-data')

let markdownData = []

const BASE_DIR = path.resolve(__dirname, '../')
const GENERATED_DIR = path.resolve(__dirname, '_generated')

const config = {
  transforms: {
    siteLink(_content, _options, ctx) {
      const url = ctx.originalPath
        .replace(/(README|readme|Readme)\.md/, '')
        .replace(/\.mdx?$/, '')
      return `### [Read this on the Vendia docs site](https://www.vendia.com/docs/${url})`
    },
    async POSTS_TABLE() {
      const [ mdData ] = await getMarkdownData([
        'posts/**/*.md',
        'posts/**/*.mdx',
        '!CONTRIBUTING.md',
        '!README.md',
        '!node_modules/**'
      ])

      markdownData = mdData
      // console.log('mdData', mdData)
      
      /* Make Markdown Table */
      let md = `| Post Details | Published-Date | edit |\n`;
      md +=    '|:-------------|:--------------:|:---:|\n';
      mdData.sort(sortByDate('date')).forEach((item) => {
        const { data, file } = item
        const fileName = path.basename(file)
        const postSlug = fileName.replace(/\.mdx?$/, '').replace(DATE_FORMAT_REGEX, '')
        const url = `https://vendia.com/blog/${postSlug}`
        const description = (data.description) ? `<br/> ${data.description.trim().replace(/\.$/, '')}` : ''
        const editLink = `https://github.com/vendia/blog/edit/master/posts/${fileName}`
        const authors = (data.authors) ? ` by ${data.authors.join(' + ')}` : ''
        // add table rows
        md += `| [${data.title}](${url}) ${description}${authors} | ${data.date} | [✍️](${editLink})\n`;
      });

      return md;
    },
    async AUTHORS_TABLE() {
      const { authors } = await getAuthors()
      // console.log('authors', authors)
      let max = longest(authors, 'name')
      // console.log('longest name', max)
      let md = `<table>\n <tr>`
      let count = 0
      authors.forEach((person, i) => {
        const { twitter, github, name, avatar, slug } = person
        count = count + 1
        const isLast = i === (authors.length - 1)
        const newTr = (!isLast) ? '<tr>' : ''
        const closeTr = '\n</tr>\n'
        const twitterLink = (twitter) ? `https://twitter.com/${twitter}` : ''
        const githubLink = (github) ? `https://github.com/${github}` : ''
        const authorLink = `https://www.vendia.com/blog/author/${slug}`
        const link = twitterLink || githubLink || authorLink || 'https://www.vendia.com/blog'
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
        const url = `https://vendia.com/releases/${postSlug}`
        const description = (data.description) ? `<br/> ${data.description.trim().replace(/\.$/, '')}` : ''
        const editLink = `https://github.com/vendia/blog/edit/master/releases/${fileName}`
        const authors = (data.authors) ? ` by ${data.authors.join(' + ')}` : ''
        // add table rows
        md += `| [${data.title}](${url}) ${description}${authors} | ${data.date} | [✍️](${editLink})\n`;
      });

      return md;
    },
  },
}

function escapeName(name) {
  return name.replace(new RegExp('\\|', 'g'), '&#124;')
}

function longest(arr, prop) {
  return arr.reduce((n, c) => Math.max((c[prop] + '').length, n), 0)
}

const formatFns = {
  posts: formatPostSlug,
  releases: formatReleaseSlug
}

async function saveGeneratedIndexes(mdData, type = 'post') {
  const kind = type.match(/s$/) ? type : `${type}s`
  const externalPosts = await getExternalPosts()

  /* Save post category map for faster lookups in build */
  const posts = getPostsByCategory(mdData, externalPosts)
  // console.log('posts', posts)
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-by-category.json`), JSON.stringify(posts, null, 2))

  /* Save post slug map for faster lookups in build */
  const slugMap = getSlugMap(mdData, BASE_DIR, formatFns[type])
  // console.log('slugMap', slugMap)
  await fs.writeFile(path.resolve(GENERATED_DIR, `${kind}-by-slug.json`), JSON.stringify(slugMap, null, 2))

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
    let slug = (post.data.slug) ? post.data.slug : path.basename(post.file)
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
    acc[slug] = nicePath
    return acc
  }, {})
}

console.log('🏃‍♂️ Doc generation initialized...\n')
markdownMagic(['**/*.md', '!node_modules/**'], config, async () => {
  console.log('ℹ Generating index information...')
  // console.log('authorsData', authorsData)
  /* Generate & save blog post data */
  const { postsByAuthor } = await saveGeneratedIndexes(markdownData, 'posts')
  // console.log('postsByAuthor', postsByAuthor)
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
  console.log('✔ Generating index information complete')
  console.log('\n🎉 Doc generation complete\n')
})