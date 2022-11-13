const matter = require('gray-matter')
/* Match <!-- frontmatter --> */
const HIDDEN_FRONTMATTER_REGEX = /^<!--.*((.|\r?\n)*?.*-->)/g
/* Match --- frontmatter --- */
const FRONTMATTER_REGEX = /^---.*((.|\r?\n)*?.*---)/g

function findFrontmatterRaw(content = '') {
  const text = content.trim()
  const hasFrontMatter = text.match(FRONTMATTER_REGEX)
  const hasHiddenFrontMatter = text.match(HIDDEN_FRONTMATTER_REGEX)
  let raw = ''
  let match = ''
  let isHidden = false

  if (hasFrontMatter) {
    raw = hasFrontMatter[0]
    match = raw.trim()
      // Fix Leading frontmatter brackets
      .replace(/^---+/, '---')
      // Trailing frontmatter brackets
      .replace(/--+$/, `---`)
  } else if (hasHiddenFrontMatter) {
    isHidden = true
    raw = hasHiddenFrontMatter[0]
    match = raw.trim()
      // Leading frontmatter brackets
      .replace(/<!--+/, '---')
      // Trailing frontmatter brackets
      .replace(/--+>/, `---`)
  }
  return {
    rawFrontMatter: raw,
    frontMatter: match,
    isHidden
  }
}

function findFrontmatter(text) {
  const { frontMatter, rawFrontMatter } = findFrontmatterRaw(text)
  let frontmatter = { data: {}, content: '' }
  /* Missing all frontmatter */
  if (!frontMatter) {
    // throw new Error(`Missing or broken frontmatter in ${filePath}. Double check file for --- frontmatter tags in files`)
    return frontmatter
  }

  let mdContent = text
  if (rawFrontMatter) {
    mdContent = text
    // Replace frontmatter brackets
    .replace(rawFrontMatter, frontMatter)
    // Replace leading lines
    // .replace(/---+\s+\n/g, '---\n')
  }

  try {
    frontmatter = matter(mdContent)
  } catch (err) {
    /* Add line numbers to output */
    const formattedError = rawFrontMatter.split('\n').map((line, i) => {
      return `${i + 1}. ${line}`
    })
    throw new Error(`Frontmatter error:\n${err.message}\n${formattedError.join('\n')}`)
  }
  // console.log('frontMatter', frontmatter)
  return Object.assign(frontmatter, { rawFrontMatter })
}

module.exports = {
  findFrontmatter,
  findFrontmatterRaw,
  HIDDEN_FRONTMATTER_REGEX,
  FRONTMATTER_REGEX
}