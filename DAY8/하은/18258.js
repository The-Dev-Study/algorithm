const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, ...inputs] = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

const queue = [];
const MX = 2000001;

let head = 0;
let tail = 0;

const size = () => tail - head;
const isEmpty = () => size() <= 0;

const push = (data) => {
    if (tail >= MX) return;
    queue[tail++] = data;
};

const pop = () => {
    if (isEmpty()) return -1;
    return queue[head++];
};

const front = () => {
    if (isEmpty()) return -1;
    return queue[head];
};

const back = () => {
    if (isEmpty()) return -1;
    return queue[tail - 1];
};

const solution = () => {
    const answer = [];

    for (const input of inputs) {
        const [cmd, data] = input.trim().split(' ');
        switch (cmd) {
            case 'push':
                push(Number(data));
                break;
            case 'pop':
                answer.push(pop());
                break;
            case 'size':
                answer.push(size());
                break;
            case 'empty':
                answer.push(Number(isEmpty()));
                break;
            case 'front':
                answer.push(front());
                break;
            case 'back':
                answer.push(back());
                break;
        }
    }
    console.log(answer.join('\n'));
};

solution();
