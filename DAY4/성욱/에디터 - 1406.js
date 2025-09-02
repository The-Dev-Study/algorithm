const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const str = input[0]
const m = parseInt(input[1])

const left = [...str]
const right = []

for (let i = 2; i < 2 + m; i++) {
  const cmd = input[i].split(' ')

  if (cmd[0] === 'L') {
    if (left.length > 0) {
      right.push(left.pop())
    }
  } else if (cmd[0] === 'D') {
    if (right.length > 0) {
      left.push(right.pop())
    }
  } else if (cmd[0] === 'B') {
    if (left.length > 0) {
      left.pop()
    }
  } else if (cmd[0] === 'P') {
    left.push(cmd[1])
  }
}

console.log(left.join('') + right.reverse().join(''))
