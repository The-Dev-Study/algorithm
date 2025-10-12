const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').trim().split('').map(Number);
const freq = Array.from({ length: 9 }).fill(0);

for (const number of input) {
    if (number === 9) {
        freq[6]++;
    } else {
        freq[number]++;
    }
}

freq[6] = Math.ceil(freq[6] / 2);

console.log(Math.max(...freq));
