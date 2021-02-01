const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const outdent = require('outdent')
const { promisify } = require('util')
const { globby } = require('markdown-magic')

const authorDirectory = path.join(__dirname, 'authors')
const postsDirectory = path.join(__dirname, 'posts')
const dateFormatRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-/g
const readFile = promisify(fs.readFile)
const exampleAuthorData = {
  "name": "David Wells",
  "github": "davidwells",
  "avatar": "https://avatars2.githubusercontent.com/u/532272?v=3&s=60",
  "bio": {
    "short": "xyz",
    "long": "xyz"
  }
}

async function doIt() {
  const authors = await validateAuthors()
  console.log('authors', authors)

  const categoriesContents = await readFile(path.join(__dirname, 'categories/categories.json'), 'utf8')

  const categories = JSON.parse(categoriesContents).map((category) =>  category.slug)
  console.log('categories', categories)

  const posts = await validatePosts({
    authors: authors.data,
    categories
  })

  console.log('posts', posts)

  const siteData = posts.reduce((acc, postData) => {
    const postTags = postData.frontMatter.tags || []
    const uniqueTags = new Set(acc.tags.concat(postTags))
    acc.tags = Array.from(uniqueTags)
    return acc
  }, {
    tags: [],
    categories: categories,
    authorSlugs: authors.slugs,
    authorDetails: authors.data,
  })

  console.log('siteData', siteData)

  return siteData
}

doIt()

async function validateAuthors() {
  const authors = await globby(['authors/*.json'])

  const authorSlugs = authors.map((author) => {
    return path.basename(author, '.json')
  })

  const authorContents = await Promise.all(authors.map((file) => {
    return readFile(file, 'utf8')
  }))

  const authorData = authorContents.map((contents, i) => {
    return {
      ...JSON.parse(contents),
      ...{
        slug: authorSlugs[i]
      }
    }
  })

  // Validate
  authorData.forEach((author) => {
    if (!validateAuthorFields(exampleAuthorData, author)) {
      throw new Error(outdent`${author.name} has missing value in author profile.
      Author data must match (if no value applies use false):
      ${JSON.stringify(exampleAuthorData, null, 2)}
      `)
    }
  })

  console.log('authorSlugs', authorSlugs)

  return {
    slugs: authorSlugs,
    data: authorData
  }
}

const WHITE_LIST = ['posts/draft-example.md', 'posts/typography.mdx']

async function validatePosts({ authors, categories }) {
  const posts = await globby(['posts/*.md', 'posts/*.mdx'])

  const postInfo = await Promise.all(posts.map(async (file) => {
    // Verify YYYY-MM-DD post format
    if (!WHITE_LIST.includes(file) && !file.match(dateFormatRegex)) {
      throw new Error(`Date prefix missing from file name "${file}"`)
    }
    const post = await readFile(file, 'utf8')
    const { data } = matter(post)
    const ext =  path.extname(file)

    if (!data) {
      throw new Error(`Frontmatter malformed in "${file}"`)
    }

    // Validate categories
    if (data.categories) {
      data.categories.forEach((category) => {
        if (!categories.includes(category)) {
          throw new Error(`Category "${category}" in ${file} is invalid. Must be one of ${JSON.stringify(categories)}`)
        }
      })
    }

    if (data.authors) {
      // Ensure author is array
      if (!Array.isArray(data.authors)) {
        throw new Error(outdent`Author field is incorrectly formatted as a string.

        Please update ${file}

        ---- The correct format is -----

        authors:
          - Bob Smith
          - Bill Green`)
      }

      data.authors.forEach((authorName) => {
        const hasAuthor = authors.find((d) => {
          return authorName === d.slug || authorName === d.name
        })
        if (!hasAuthor) {
          throw new Error(outdent`
            Post ${file} has invalid author "${authorName}".
            Must be one of ${JSON.stringify(authors.map((d) => d.slug))}
          `)
        }
      })
    }

    if (!data.title) {
      throw new Error(outdent`
      No title found in post Frontmatter YAML

      Please update ${file}

      ---- The description format is -----

      title: "My 50-60 character Human & Keyword Friendly title"
      `)
    }

    if (!data.description) {
    throw new Error(outdent`
      No description found in post Frontmatter YAML

      Please update ${file}

      ---- The description format is -----

      description: "My 155-170 character long description for SEO purposes"

      `)
    }

    if (data.description && data.description.length > 185) {
      throw new Error(outdent`
        Description in ${file} is too long.

        It is ${data.description.length} characters long

        Please update keep descriptions under 185 characters long
      `)
    }

    if (file.match(/[A-Z]/)) {
      throw new Error(`
        Error: file name needs to be in all lowercase

        Please remove uppercase letters from filename ${file}`
      )
    }

    return {
      frontMatter: data,
      fileName: path.basename(file),
      slug: path.basename(file, ext),
      type: ext.replace(/^\./, '')
    }
  }))

  return postInfo
}

/* Utils */
function validateAuthorFields(obj1, obj2) {
  return Object.keys(obj1).every((prop) => obj2.hasOwnProperty(prop))
}
