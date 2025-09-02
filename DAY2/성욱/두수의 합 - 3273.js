const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
	.split('\n')

const inputArr = input[1].split(' ').map(Number)

const x = Number(input[2])

const map = {}
let ans = 0

for (const num of inputArr) {
	if (num >= x) {
		continue
	} else if (map[x - num]) {
		delete map[x - num]
		ans++
	} else {
		map[num] = true
	}
}

console.log(ans)