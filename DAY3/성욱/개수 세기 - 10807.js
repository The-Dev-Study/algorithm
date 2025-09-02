const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const arr = input[1].split(' ').map(Number)

const v = Number(input[2])

let count = 0

for (const num of arr) {
  if (num === v) {
    count++
  }
}

console.log(count)