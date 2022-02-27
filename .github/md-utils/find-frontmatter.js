const HIDDEN_FRONTMATTER_REGEX = /^<!--.*((.|\r?\n)*?.*-->)/g
const FRONTMATTER_REGEX = /^---.*((.|\r?\n)*?.*---)/g

function findFrontmatter(content = '') {
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

module.exports = {
  findFrontmatter,
  HIDDEN_FRONTMATTER_REGEX,
  FRONTMATTER_REGEX
}