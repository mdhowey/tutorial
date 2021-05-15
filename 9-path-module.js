const path = require('path')

// Show what the path seperation token is
console.log(path.sep)

// Look into file paths... still don't know what this does
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// Base appears to be last file or dir in a file path
const base = path.basename(filePath)
console.log(base)

// Absolute path 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)