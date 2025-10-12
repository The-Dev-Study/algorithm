const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const grades = Array.from({ length: 7 }, () => [0, 0]);

for (let i = 1; i <= N; i++) {
    const [S, Y] = input[i].split(' ').map(Number);
    grades[Y][S]++;
}

let roomsNum = 0;

grades.forEach((_, i) => {
    roomsNum += Math.ceil(grades[i][0] / K);
    roomsNum += Math.ceil(grades[i][1] / K);
});

console.log(roomsNum);
