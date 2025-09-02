const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const alphabet = new Array(26).fill(0)

for (let i = 0; i < input.length; i++) {
  const ascii = input[i].charCodeAt()
  alphabet[ascii - 97]++
}

console.log(alphabet.join(' '))