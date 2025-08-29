const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const frequency = Array.from({ length: 10 }).fill(0);
const [A, B, C] = fs.readFileSync(filePath, 'utf-8').split('\n').map(Number);

const res = (A * B * C).toString();

for (const c of res) {
    frequency[Number(c)]++;
}

console.log(frequency.join('\n'));
