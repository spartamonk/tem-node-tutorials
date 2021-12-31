//path module: This allows us to interact with our paths

const path = require('path')

console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//to get the particular file name of the path

const base = path.basename(filePath)
console.log(base)

//to get an absolute path of the file

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
//alternative absolute path
const absolutePath = path.resolve(__dirname, `.${filePath}`)
console.log(absolute)
console.log(absolutePath)