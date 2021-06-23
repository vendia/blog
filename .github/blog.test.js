const path = require('path')
const fs = require('fs').promises
const { test } = require('uvu')
const assert = require('uvu/assert')
const { globby } = require('markdown-magic')
const getMdFiles = require('./md-get')

const cwd = process.cwd()
const DATE_FORMAT_REGEX = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-/g
const GLOB_PATTERN = [
  'posts/**/*.md',
  'posts/**/*.mdx',
  '!CONTRIBUTING.md',
  '!README.md',
  '!node_modules/**'
]
const exampleAuthorData = {
  "name": "David Wells",
  "github": "davidwells",
  "avatar": "https://avatars2.githubusercontent.com/u/532272?v=3&s=60",
  "bio": {
    "short": "xyz",
    "long": "xyz"
  }
}

test('Post file malformed', async () => {
  const postsFiles = await globby(["posts/*"], { cwd })
  // Verify all markdown files have markdown extension
  postsFiles.forEach((filePath) => {
    if (filePath.indexOf('.') === -1) {
      throw new Error(`"${filePath}" missing file extension .md or .mdx`)
    }
  })
})

test('Docs validation', async () => {
  const [ mdData, errors ] = await getMdFiles(GLOB_PATTERN)
  const allAuthors = await getAuthors()
  const allTags = getBlogTags(mdData)
  const allCategories = await getCategories()
  const allCategorySlugs = allCategories.map((category) =>  category.slug)
  console.log('allTags', allTags)

  /* Verify frontmatter contents */
  mdData.forEach((info) => {
    const { data, file, isEmpty, content } = info
    const fileName = path.basename(file)
    /* Frontmatter must provided */
    if (!data) {
      errors.push(`Missing frontmatter in ${file}`)
    }
    /* Files must have content */
    if (Object.keys(data).length && (isEmpty || !content)) {
      console.log('doc', doc)
      errors.push(`File empty -> ${file}`)
    }

    /* Verify frontmatter */
    const { title, description, authors, categories } = data

    /* Titles must provided */
    if (!title) {
      errors.push(`Missing "title" frontmatter field in ${file}
    Please add:
    ─────
    title: "My 50-60 character Human & Keyword Friendly title"
    ─────`)
    }
   
    /* Descriptions must provided */
    if (!description) {
      errors.push(`Missing "description" field frontmatter in ${file}
    Please add:
    ─────
    description: "My 155-170 character long description for SEO purposes"
    ─────`);
    }

    /* Descriptions must less than 200 characters */
    if (description && description.length > 200) {
      errors.push(`"description" field too long in ${file}
    It is currently ${description.length} characters long
    Must be under 200 characters long`);
    }

    /* File names must be lowercase */
    if (fileName.match(/[A-Z]/)) {
      errors.push(`Error: file name needs to be in all lowercase
      Please remove uppercase letters from filename ${file}`
      );
    }

    /* Verify categories are valid */
    if (categories) {
      data.categories.forEach((cat) => {
        if (!allCategorySlugs.includes(cat)) {
          errors.push(`Invalid category "${cat}" in ${doc.file}. 
Must be one of ${JSON.stringify(allCategorySlugs)}
Add categories in the ./categories/categories.json file`)
        }
      })
    }

    /* Verify authors exist */
    if (authors) {
      if (Array.isArray(authors)) {
        authors.forEach((name) => {
          const hasAuthor = allAuthors.data.find((d) => {
            return name === d.slug || name === d.name
          })
          if (!hasAuthor) {
            errors.push(`Invalid author "${name} in ${file}".
      Must be one of in "authors" field
      ${JSON.stringify(allAuthors.data.map((d) => d.slug).join(", "))}`)
          }
        })
      } else {
        errors.push(`"authors" field is incorrectly formatted as a string in ${file}
    Correct format:
    authors:
      - Bob Smith
      - Bill Green`)
      }
    }
  })
  throwErrors(errors)
  assert.is(errors.length, 0)
})

test('Blog posts are all date prefixed', async () => {
  let errors = []
  const [ mdData, _errors, paths ] = await getMdFiles(GLOB_PATTERN)
  const WHITE_LIST = ['draft-example.md', 'typography.mdx']

  const blogPosts = paths.filter((p) => {
    return !WHITE_LIST.includes(path.basename(p))
  })
  
  blogPosts.forEach((p) => {
    if (!p.match(DATE_FORMAT_REGEX)) {
      errors.push(`Date prefix "YYYY-MM-DD" missing from file name "${p}"`)
    }
  })

  throwErrors(errors)
  
  assert.is(blogPosts.length > 0, true, 'Has blog posts')
})

test('Author data is valid', async () => {
  const authors = await validateAuthors()
  assert.is(authors.slugs.length > 0, true, 'has authors')
})

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
    data: authorData
  }
}


function getBlogTags(data) {
  return data.reduce((tags, d) => {
    const postTags = d.data.tags || []
    const uniqueTags = new Set(tags.concat(postTags))
    tags = Array.from(uniqueTags)
    return tags
  }, [])
}

async function validateAuthors() {
  const authors = await getAuthors()
  // Validate
  authors.data.forEach((author) => {
    if (!validateAuthorFields(exampleAuthorData, author)) {
      throw new Error(`${author.slug} has missing value in author profile.
      Author data must match (if no value applies use false):
${JSON.stringify(exampleAuthorData, null, 2)}
      `)
    }
  })
  return authors
}

function validateAuthorFields(obj1, obj2) {
  return Object.keys(obj1).every((prop) => obj2.hasOwnProperty(prop))
}

const errorHeading = '\n\n──────VALIDATION ERROR─────────\n'
function throwErrors(errors = []){
 if (errors.length) {
    throw new Error(`${errorHeading}
Markdown Errors!
${errors.map((err) => `  - ${err}`).join('\n')}
\n──────VALIDATION ERROR END───────`)
  }
}

test.run()