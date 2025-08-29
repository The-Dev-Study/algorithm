const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B, C] = input.map(Number);

const result = (A * B * C).toString();
const counts = new Array(10).fill(0);

for (let digit of result) {
    counts[digit]++;
}

console.log(counts.join('\n'));