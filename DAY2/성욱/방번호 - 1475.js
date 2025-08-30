const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()

const numbers = new Array(9).fill(0)

for (let i = 0; i < input.length; i++) {
	if (input[i] === '9') {
		numbers[6]++;
	} else {
		numbers[Number(input[i])]++
	}
}

numbers[6] = Math.ceil(numbers[6] / 2)

const max = Math.max(...numbers)

console.log(max)