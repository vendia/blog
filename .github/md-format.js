const matter = require('gray-matter')

const HIDDEN_FRONTMATTER_REGEX = /^<!--.*((.|\n)*?.*-->)/g
const FRONTMATTER_REGEX = /^---.*((.|\n)*?.*---)/g

function formatMD(text, filePath) {
  const errors = []
  const hasFrontMatter = text.match(FRONTMATTER_REGEX)
  const hasHiddenFrontMatter = text.match(HIDDEN_FRONTMATTER_REGEX)
  
  /* Missing all frontmatter */
  if (!hasFrontMatter && !hasHiddenFrontMatter) {
    errors.push(`Missing or broken frontmatter in ${filePath}`)
  }

  const match = hasFrontMatter || hasHiddenFrontMatter
  const replaceText = (match) ? match[0] : ''
  const cleanText = replaceText
    // Leading frontmatter brackets
    .replace(/<!--+/, '---')
    // Trailing frontmatter brackets
    .replace(/--+>/, `---`)
  const newContent = text
    // Replace frontmatter brackets
    .replace(replaceText, cleanText)
    // Replace leading lines
    .replace(/---+\s+\n/g, '---\n')

  let frontmatter = { data: {} }
  try {
    frontmatter = matter(newContent)
  } catch(err) {
    console.log(`Broken frontmatter ${filePath}`)
    console.log(err.message)
    console.log('Failed on frontmatter:')
    console.log(replaceText)
    errors.push(`Broken frontmatter in ${filePath}`)
  }

  return {
    errors,
    file: filePath,
    frontMatterRaw: replaceText,
    ...frontmatter
  }
}

module.exports = formatMD