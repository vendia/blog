const path = require('path')
const { test } = require('uvu')
const assert = require('uvu/assert')
const {
  getTags,
  getAuthors, 
  getCategories,
  getMarkdownData,
  DATE_FORMAT_REGEX
} = require('./get-data')
const { verifyMdExtension } =  require('./md-utils/verify-extension')

const cwd = process.cwd()

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

test('File have correct extensions', async () => {
  const [ errors, files ] = await verifyMdExtension(["posts/*"])
  const [ releaseErrors, releaseFiles ] = await verifyMdExtension(["releases/*"])

  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  if (releaseErrors.length) {
    throw new Error(releaseErrors.join('\n'))
  }
})

test('Docs validation', async () => {
  const [ mdData, errors ] = await getMarkdownData(GLOB_PATTERN)
  const allAuthorsData = await getAuthors()
  const allAuthors = allAuthorsData.authors
  const allTags = getTags(mdData)
  const allCategories = await getCategories()
  const allCategorySlugs = allCategories.map((category) =>  category.slug)
  
  console.log('\nAll Blog Tags')
  console.log(allTags)
  console.log('\nAll Blog Categories')
  console.log(allCategorySlugs)
  console.log('\nAll Authors')
  console.log(allAuthors)

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
    const { title, date, description, authors, categories } = data

    /* Titles must provided */
    if (!title) {
      errors.push(`Missing "title" frontmatter field in ${file}
    Please add:
    ─────
    title: "My 50-60 character Human & Keyword Friendly title"
    ─────`)
    }

    /* Date must provided */
    if (!date) {
      errors.push(`Missing "date" frontmatter field in ${file}
    Please add:
    ─────
    date: "YYYY-MM-DD"
    ─────`)
    }
    
    /* Date must be YYYY-MM-DD */
    if (date && !date.match(/\d{4}-\d{2}-\d{2}/)) {
      errors.push(`Malformed "date" field in ${file}
    "${date}" is invalid value.
    Format must be YYYY-MM-DD. E.g. 2021-01-01`)
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
          const hasAuthor = allAuthors.find((d) => {
            return name === d.slug || name === d.name
          })
          if (!hasAuthor) {
            errors.push(`Invalid author "${name} in ${file}".
      Must be one of in "authors" field
      ${JSON.stringify(allAuthors.map((d) => d.slug).join(", "))}`)
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
  const [ mdData, _errors, paths ] = await getMarkdownData(GLOB_PATTERN)
  
  paths.forEach((p) => {
    if (!p.match(DATE_FORMAT_REGEX)) {
      errors.push(`Date prefix "YYYY-MM-DD" missing from file name "${p}"`)
    }
  })

  throwErrors(errors)
  
  assert.is(paths.length > 0, true, 'Has blog posts')
})

test('Author data is valid', async () => {
  const authors = await validateAuthors()
  assert.is(authors.length > 0, true, 'has authors')
})

async function validateAuthors() {
  const { authors } = await getAuthors()
  // Validate
  authors.forEach((author) => {
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

const copy = '█ ✘ VALIDATION ERROR ───────────────────────────'
const endz = '────────────────────────────────────────────────'
const errorHeading = `
████████████████████████████████████████████████
${copy}
████████████████████████████████████████████████
`
function throwErrors(errors = []){
 if (errors.length) {
   const messages = errors.map((err) => {
     if (typeof err === 'object') {
       if (err.message || err.error) {
         return `  - ${err.message || err.error}\n${JSON.stringify(err, null, 2)}`
       }
       return JSON.stringify(err, null, 2)
     }
     return `  - ${err}`
   })
    throw new Error(`${errorHeading}
Markdown Errors!
${messages.join('\n')}
\n${endz}`)
  }
}

test.run()
