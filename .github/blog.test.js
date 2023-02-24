const path = require('path')
const fs = require('fs')
const { test } = require('uvu')
const assert = require('uvu/assert')
const { convertDateToString } = require('./md-utils/utils')
const { verifyMdExtension } =  require('./md-utils/validate-file-ext')
const {
  getTags,
  getAuthors, 
  getCategories,
  getMarkdownData,
  DATE_FORMAT_REGEX
} = require('./get-md-data')
/* // simulate CI env
process.env.CI = true
/** */

const cwd = process.cwd()
const ERROR_FILE_PATH = path.resolve(cwd, 'errors.json')
const WARNING_FILE_PATH = path.resolve(cwd, 'warnings.json')
const DESCRIPTION_MAX_LENGTH = 200 // should be 200
const ALLOW_LONGER_DESCRIPTIONS = true
const ALLOW_ARBITRARY_CATEGORIES = true

if (process.env.CI) {
  console.log('clear errors')
  clearErrors()
}

const GLOB_PATTERN = [
  'posts/**/*.md',
  'posts/**/*.mdx',
  /* Ignore test posts */
  '!posts/**/draft-example.md',
  '!posts/**/typography.mdx',
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
    throwErrors(errors)
  }

  if (releaseErrors.length) {
    throwErrors(releaseErrors)
  }
})

test('Verify files in correct place', async () => {
  const [ _errors, files ] = await verifyMdExtension(["*.md"])

  if (files.length > 1) {
    const extraFiles = files.filter((f) => f !== 'README.md')
    throwErrors(extraFiles.map((f) => {
      return `Extra markdown file found "${f}" in root directory. Make sure posts/releases are in /post or /releases folder`
    }))
  }
})

test('Post validation', async () => {
  let warnings = []
  const [ mdData, errors ] = await getMarkdownData(GLOB_PATTERN)
  const allAuthorsData = await getAuthors()
  const allAuthors = allAuthorsData.authors
  const allTags = getTags(mdData)
  const allCategories = await getCategories()
  const allCategorySlugs = allCategories.map((category) =>  category.slug)
  
  console.log('\nAll Blog Tags:')
  console.log(allTags)
  console.log('\nAll Blog Categories:')
  console.log(allCategorySlugs)
  console.log('\nAll Authors:')
  console.log(allAuthors.map((author) => author.name))
  console.log('\nAll Draft Posts:')
  console.log(mdData.filter((post) => post.data && post.data.draft).map((post) => post.file))
  console.log('\nAll Posts:')
  console.log(mdData.filter((post) => post.data && !post.data.draft).map((post) => post.file))
  
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
      console.log('data', data)
      errors.push(`File empty -> ${file}`)
    }

    /* Verify frontmatter */
    const { title, description, authors, categories } = data
    /* Formate date to string */
    const date = convertDateToString(data.date)

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
    // console.log('file', file)
    // console.log('date', date)
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
    if (description && description.length > DESCRIPTION_MAX_LENGTH) {
      const messages = (ALLOW_LONGER_DESCRIPTIONS) ? warnings: errors
      messages.push(`"description" field must be under ${DESCRIPTION_MAX_LENGTH} characters. Fix "description" in ${nicePath(file)} that is ${description.length} characters.`)
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
          const catMessage = `Invalid category "${cat}" in ${nicePath(file)}. Must be one of ${JSON.stringify(allCategorySlugs)}. Add categories in the ./settings/categories.json file`
          const messages = (ALLOW_ARBITRARY_CATEGORIES) ? warnings : errors
          messages.push(catMessage)
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
  logWarnings(warnings)
  throwErrors(errors)
  assert.is(errors.length, 1)
})

test('Blog posts are all date prefixed', async () => {
  let errors = []
  const [ mdData, _errors, paths ] = await getMarkdownData(GLOB_PATTERN)
  
  paths.forEach((p) => {
    if (!p.match(DATE_FORMAT_REGEX)) {
      errors.push(`Date prefix "YYYY-MM-DD" missing from file name "${p}"`)
    }
  })

  paths.forEach((p) => {
    if (p.match(/\s/)) {
      errors.push(`File name contains whitespace in file name "${p}"`)
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

function headerLog(copy) {
  return `

████████████████████████████████████████████████
${copy}
████████████████████████████████████████████████

`
}

function throwErrors(errors = []){
  if (!errors.length) return
  
  const messages = errors.map((err) => {
    if (typeof err === 'object') {
      if (err.message || err.error) {
        return `  - ${err.message || err.error}\n${JSON.stringify(err, null, 2)}`
      }
      return JSON.stringify(err, null, 2)
    }
    return `  - ${err}`
  })
  // Write out to file in github actions to add errors to the PR
  if (process.env.CI) {
    saveFile(ERROR_FILE_PATH, messages)
  }
  throw new Error(`${headerLog(copy)}
Markdown Errors!
${messages.join('\n')}
\n${endz}`)
}

function logWarnings(warnings = []) {
  if (!warnings.length) return
  
  const messages = warnings.map((err) => {
    if (typeof err === 'object') {
      if (err.message || err.error) {
        return `  - ${err.message || err.error}\n${JSON.stringify(err, null, 2)}`
      }
      return JSON.stringify(err, null, 2)
    }
    return `  - ${err}`
  })
  // Write out to file in github actions to add errors to the PR
  if (process.env.CI) {
    saveFile(WARNING_FILE_PATH, messages)
  }
  console.log(`${headerLog('█ VALIDATION WARNINGS ──────────────────────────')}
Markdown Warnings!
${messages.join('\n')}
\n${endz}`)
}

function nicePath(filePath = '') {
  return filePath.replace(cwd, '')
}

function saveFile(filePath, messages) {
  const existingErrors = readAndParseFile(filePath)
  const allErrors = existingErrors.concat(messages)
  try {
    fs.writeFileSync(filePath, JSON.stringify(allErrors, null, 2))
  } catch (e) {}
}

function readAndParseFile(filePath) {
  let data = []
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch (e) {}
  return data
}

function clearErrors() {
  try {
    fs.unlinkSync(ERROR_FILE_PATH)
    fs.unlinkSync(WARNING_FILE_PATH)
  } catch (e) {}
}

test.after(() => {
  if (process.env.CI) {
    const warnings = readAndParseFile(WARNING_FILE_PATH)
    if (warnings.length) {
      console.log()
      console.log('───────────────────────')
      console.log('Warnings')
      console.log(warnings)
      console.log('───────────────────────')
      console.log()
    }
    const errors = readAndParseFile(ERROR_FILE_PATH)
    if (errors.length) {
      console.log()
      console.log('───────────────────────')
      console.log('Errors')
      console.log(errors)
      console.log('───────────────────────')
      console.log()
    }
  }
})

test.run()


