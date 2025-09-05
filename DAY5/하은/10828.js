const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [n, ...lines] = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
const N = Number(n);

const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
    const [type, number] = lines[i].split(' ');

    switch (type) {
        case 'push':
            stack.push(number);
            break;
        case 'top':
            if (stack.length === 0) {
                answer.push(-1);
            } else {
                answer.push(stack[stack.length - 1]);
            }
            break;
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            answer.push(stack.length === 0 ? 1 : 0);
            break;
        case 'pop':
            if (stack.length === 0) {
                answer.push(-1);
            } else {
                answer.push(stack.pop());
            }
            break;
    }
}

console.log(answer.join('\n'));
