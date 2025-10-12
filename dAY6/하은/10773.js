const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, ...input] = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

const stack = Array.from({ length: 100000 });
let pos = 0;
let res = 0;

for (num of input) {
    if (num === 0) {
        res -= stack[pos - 1];
        pos--;
    } else {
        stack[pos] = num;
        res += stack[pos];
        pos++;
    }
}

console.log(res);
