const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const K = input[0]
const stack = []

for (let i = 1; i <= K; i++) {
  if (input[i] === 0) {
    stack.pop()
  } else {
    stack.push(input[i])
  }
}

if (stack.length === 0) {
  console.log(0)
  return
}

console.log(stack.reduce((prev, curr) => prev + curr))