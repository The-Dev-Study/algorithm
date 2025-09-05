const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const n = input[0]
const stack = []
const ans = []
let idx = 1

for (let i = 1; i <= n; i++) {
  const num = input[i]

  if (num < idx) {
    const top = stack.pop()
    if (top !== num) {
      console.log('NO')
      return
    } else {
      ans.push('-')
      continue
    }
  }

  for (let j = idx; j <= num; j++) {
    stack.push(j)
    ans.push('+')
    idx++
  }
  stack.pop()
  ans.push('-')
}

console.log(ans.join('\n'))