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
  getMarkdownData,
  sortByDate,
  DATE_FORMAT_REGEX
} = require('./get-data')

let markdownData = []

const config = {
  transforms: {
    siteLink(_content, _options, ctx) {
      const url = ctx.originalPath
        .replace(/(README|readme|Readme)\.md/, '')
        .replace(/\.mdx?$/, '')
      return `### [Read this on the Vendia docs site](https://www.vendia.net/docs/${url})`
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
        const url = `https://vendia.net/blog/${postSlug}`
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
        const { twitter, github, name, avatar } = person
        count = count + 1
        const isLast = i === (authors.length - 1)
        const newTr = (!isLast) ? '<tr>' : ''
        const closeTr = '\n</tr>\n'
        const twitterLink = (twitter) ? `https://twitter.com/${twitter}` : ''
        const githubLink = (github) ? `https://github.com/${github}` : ''
        const link = twitterLink || githubLink || 'https://www.vendia.net/blog'
        const image = avatar || 'https://www.fillmurray.com/100/100'
        // Add row
        md += `
  <td align="center">
    <a href="${link}">
      <img src="${image}" width="100px;" alt=""/>
      <br />
      ${escapeName(name)}
    </a>
  </td>`
        // 5 elements per table row
        if (count > 4) {
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
      md +=    '|:-------------|:--------------:|:---:|\n';
      mdData.sort(sortByDate('date')).forEach((item) => {
        const { data, file } = item
        const fileName = path.basename(file)
        const postSlug = fileName.replace(/\.mdx?$/, '')
        const url = `https://vendia.net/releases/${postSlug}`
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

async function saveGeneratedIndexes(mdData, type = 'post') {
  const kind = type.match(/s$/) ? type : `${type}s`
  const posts = getPostsByCategory(mdData)
  // console.log('posts', posts)
  await fs.writeFile(path.resolve(__dirname, `_generated/${kind}-by-category.json`), JSON.stringify(posts, null, 2))

  const postByTag = getPostsByTag(mdData)
  // console.log('tags', tags)
  await fs.writeFile(path.resolve(__dirname, `_generated/${kind}-by-tag.json`), JSON.stringify(postByTag, null, 2))

  const postsByAuthor = getPostsByAuthor(mdData)
  // console.log('postsByAuthor', postsByAuthor)
  await fs.writeFile(path.resolve(__dirname, `_generated/${kind}-by-author.json`), JSON.stringify(postsByAuthor, null, 2))
  // console.log('authors', authors)

  const tags = getTags(mdData).reduce((acc, curr) => {
    acc[slugify(curr).toLowerCase()] = curr
    return acc
  }, {})
  await fs.writeFile(path.resolve(__dirname, `_generated/${kind}-tags.json`), JSON.stringify(tags, null, 2))
}

markdownMagic(['**/*.md', '!node_modules/**'], config, async () => {
  /* Save author data */
  const authors = await getAuthors()
  await fs.writeFile(path.resolve(__dirname, '_generated/author-data.json'), JSON.stringify(authors, null, 2))
  /* Save blog post data */
  await saveGeneratedIndexes(markdownData, 'posts')

  /* Save releases data */
  const [ releaseMdData ] = await getMarkdownData([
    'releases/**/*.md',
    'releases/**/*.mdx',
    '!CONTRIBUTING.md',
    '!README.md',
    '!node_modules/**'
  ])

  await saveGeneratedIndexes(releaseMdData, 'releases')

  console.log('doc gen complete')
})