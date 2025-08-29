const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const frequency = Array.from({ length: 26 }).fill(0);

const S = fs
    .readFileSync(filePath, 'utf-8')
    .split('')
    .forEach((c) => {
        const i = c.charCodeAt(0) - 97;
        frequency[i]++;
    });

console.log(frequency.join(' '));
