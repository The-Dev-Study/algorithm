const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, K] = fs.readFileSync(filePath, 'utf-8').trim().split(' ').map(Number);

const prev = Array.from({ length: N + 1 }, (_, i) => i - 1);
const next = Array.from({ length: N + 1 }, (_, i) => i + 1);

prev[1] = N;
next[N] = 1;

let cur = 0;
const answer = [];

while (answer.length !== N) {
    for (let i = 0; i < K; i++) {
        cur = next[cur];
    }
    answer.push(cur);
    next[prev[cur]] = next[cur];
    prev[next[cur]] = prev[cur];
}

console.log(`<${answer.join(', ')}>`);
