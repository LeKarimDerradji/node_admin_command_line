const fs = require('fs')


if (process.argv.length !== 3) {
    console.log('usage: node newVowel.js text.txt')
    process.exit(1)
}

// Check if file exists
if (!fs.existsSync(process.argv[2])) {
    console.log('This file does not exists.')
    process.exit(1)
}
// Retrieve the Stat Object from the file
const stats = fs.statSync(process.argv[2])
// Chech if file is a file
if (!stats.isFile()) {
    console.log(`"${process.argv[2]}" is not a file.`)
    process.exit(1)
}

// Read the file and store the content in a variable
let text = fs.readFileSync(process.argv[2], 'utf-8')

console.log(text)
 

let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

for (let i = 0; i < text.length; ++i) {
  if (
    text[i] === 'e' ||
    text[i] === 'é' ||
    text[i] === 'è' ||
    text[i] === 'ê'
  ) {
    ++nbE
  } else if (text[i] === 'a') {
    ++nbA
  } else if (text[i] === 'i') {
    ++nbI
  } else if (text[i] === 'o') {
    ++nbO
  } else if (text[i] === 'u') {
    ++nbU
  } else if (text[i] === 'y') {
    ++nbY
  }
}

console.log(`nb E: ${nbE}`)
console.log(`nb A: ${nbA}`)
console.log(`nb I: ${nbI}`)
console.log(`nb O: ${nbO}`)
console.log(`nb U: ${nbU}`)
console.log(`nb Y: ${nbY}`)
