const path = require('path')
const { promises, constants } = require('fs')
const fs = promises

const deleteFile = (s) => fs.unlink(s).catch((e) => {
  // ignore already deleted files
  if (e.code === 'ENOENT') return
  throw e
})

const fileExists = (s) => fs.access(s, constants.F_OK).then(() => true).catch(() => false)

// Recursive read dir
async function readDir(dir, recursive = true, allFiles = []) {
  const files = (await fs.readdir(dir)).map((file) => path.join(dir, file))
  if (!recursive) return files
  allFiles.push(...files)
  await Promise.all(files.map(async (file) => {
    return (await fs.stat(file)).isDirectory() && readDirResurvsive(file, recursive, allFiles)
  }))
  return allFiles
}

async function createDir(directoryPath, recursive = true) {
  // ignore errors - throws if the path already exists
  return fs.mkdir(directoryPath, { recursive: recursive }).catch((e) => {})
}

async function copyDir(src, dest, recursive = true) {
  await createDir(dest, recursive) // Ensure directory exists

  const filePaths = await fs.readdir(src)
  await Promise.all(filePaths.map(async (item) => {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    const itemStat = await fs.lstat(srcPath)

    if (itemStat.isFile()) {
      return fs.copyFile(srcPath, destPath)
    }
    // Return early if recursive false
    if (!recursive) return
    // Copy child directory
    return copyDir(srcPath, destPath, recursive)
  }))
}

module.exports = {
  // Check if file exists
  fileExists: fileExists,
  // Write file
  writeFile: fs.writeFile,
  // Read file
  readFile: fs.readFile,
  // Copy file
  copyFile: fs.copyFile,
  // Delete file
  deleteFile: deleteFile,
  // Check if directory exists
  directoryExists: fileExists,
  // Recursively create directory
  createDir: createDir,
  // Recursively get file names in dir
  readDir: readDir,
  // Recursively copy directory
  copyDir: copyDir,
}