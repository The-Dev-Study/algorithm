const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

const i = input[1].split(' ').map(Number);
const v = Number(input[2]);

console.log(i.filter((num) => num === v).length);
