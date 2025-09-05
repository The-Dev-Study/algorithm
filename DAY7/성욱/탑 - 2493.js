const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
const T = input[1].split(' ').map(Number)
const ans = []
const towers = []

for (let i = 0; i < N; i++) {
  while (towers.length > 0 && towers[towers.length - 1][1] < T[i]) {
    towers.pop()
  }

  if (towers.length === 0) {
    ans.push(0)
  } else {
    ans.push(towers[towers.length - 1][0] + 1)
  }

  towers.push([i, T[i]])
}

console.log(ans.join(' '))