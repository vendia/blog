const path = require('path')
const markdownMagic = require('markdown-magic')
const {
  getTags,
  getAuthors, 
  getCategories,
  getMarkdownData,
  DATE_FORMAT_REGEX
} = require('./utils')

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
      console.log('mdData', mdData)
      // Make table header
      let md = `| Post Details | Published Date |\n`;
      md +=    '|:-------------|:--------------:|\n';
      mdData.sort(sortDate('date')).forEach((item) => {
        const { data, file } = item
        const fileName = path.basename(file).replace(/\.mdx?$/, '').replace(DATE_FORMAT_REGEX, '')
        const url = `https://vendia.net/blog/${fileName}`
        const description = (data.description) ? `<br/> ${data.description.trim().replace(/\.$/, '')}` : ''
        const authors = (data.authors) ? ` by ${data.authors.join(' + ')}` : ''
        // add table rows
        md += `| [${data.title}](${url}) ${description}${authors} | ${data.date} |\n`;
      });

      return md;
    },
  },
}

function sortDate(dateType, order) {
  return function (a, b) {
    const timeA = new Date(a.data[dateType]).getTime()
    const timeB = new Date(b.data[dateType]).getTime()
    if (order === 'asc') {
      return timeA - timeB
    }
    // default 'desc' descending order
    return timeB - timeA
  }
}

markdownMagic(['**/*.md', '!node_modules/**'], config, () => {
  console.log('doc gen complete')
})