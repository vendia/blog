const path = require('path')
const fs = require('fs')
const { test } = require('uvu')
const assert = require('uvu/assert')
const { findLinks } = require('./find-links')
const { findFrontmatter } = require('./find-frontmatter')

const cwd = process.cwd()
// const FILE_PATH = path.join(__dirname, '../../pages/pancakes-list.md')
const FILE_PATH = path.join(__dirname, '../../pages/default-title.md')
const fileWithLinks = fs.readFileSync(FILE_PATH, 'utf-8')

test('Find frontmatter', async () => {
  const frontmatter = findFrontmatter(fileWithLinks, FILE_PATH)
  // console.log('frontmatter', frontmatter)
  assert.is(typeof frontmatter.data, 'object')
})

test.run()