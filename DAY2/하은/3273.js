const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const x = Number(input[2]);

a.sort((a, b) => a - b);

let start = 0;
let end = n - 1;

let res = 0;

while (start < end) {
    const a_ij = a[start] + a[end];
    if (a_ij === x) {
        res += 1;
        start++;
        end--;
    } else if (a_ij > x) {
        end--;
    } else {
        start++;
    }
}

console.log(res);
