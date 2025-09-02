const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

input.splice(0, 1)

for (const str of input) {
  const left = []
  const right = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '<') {
      if (left.length > 0) {
        right.push(left.pop())
      }
    } else if (str[i] === '>') {
      if (right.length > 0) {
        left.push(right.pop())
      }
    } else if (str[i] === '-') {
      if (left.length > 0) {
        left.pop()
      }
    } else {
      left.push(str[i])
    }
  }
  const password = left.join('') + right.reverse().join('')
  console.log(password)
}
