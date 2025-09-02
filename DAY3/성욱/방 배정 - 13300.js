const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [N, K] = input.splice(0, 1)[0].split(' ').map(Number)

// 1 ~ 6 까지 여학생 7 ~ 12 까지 남학생
const students = new Array(13).fill(0)
let ans = 0

for (const line of input) {
  const [S, Y] = line.split(' ').map(Number)
  const idx = Y + S * 6

  students[idx]++
  if (students[idx] % K === 1) {
    ans++
  }
}

console.log(ans)