const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const buildings = []
for (let i = 1; i <= N; i++) {
  buildings.push(Number(input[i]))
}

let totalCount = 0
const stack = []

for (let i = 0; i < N; i++) {
  const currentHeight = buildings[i]

  while (stack.length > 0 && stack[stack.length - 1][1] <= currentHeight) {
    stack.pop()
  }

  totalCount += stack.length

  stack.push([i, currentHeight])
}

console.log(totalCount)
