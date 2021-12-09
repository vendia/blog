const { globby } = require('markdown-magic')

async function verifyMdExtension(glob, cwd = process.cwd()) {
  const files = await globby(glob, { cwd })
  let errors = []
  // Verify all markdown files have markdown extension
  files.forEach((filePath) => {
    if (!filePath.match(/\.mdx?$/) && !filePath.match(/\external-posts\.json?$/)) {
      errors.push(`"${filePath}" missing file extension .md or .mdx`)
    }
  })

  return [ errors, files ]
}

module.exports = {
  verifyMdExtension
}