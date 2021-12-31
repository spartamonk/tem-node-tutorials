//File System Module

//synchronously - blocking approach

const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//second paramether 'utf8' will make sure text is displayed in the console
console.log(first, second)

writeFileSync(
  './content/result-sync.txt',
  `Here is the results : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with the task');
console.log('starting next task');
// use parameter object {flag: 'a'} to append existing values in the file without the flag object any existing values will be replaced by the text in the writeFileSync function
