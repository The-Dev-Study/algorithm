const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, ...input] = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

const queue = [];
let MX = 10001;
let head = 0;
let tail = 0;

const size = () => tail - head;
const isEmpty = () => tail - head <= 0;

const push = (data) => {
    if (tail >= MX) return;
    queue[tail++] = data;
};

const pop = () => {
    if (isEmpty()) return -1;
    return queue[head++];
};

const front = () => {
    if (!isEmpty()) return queue[head];
    return -1;
};

const back = () => {
    if (!isEmpty()) return queue[tail - 1];
    return -1;
};

const solution = () => {
    const answer = [];

    for (const line of input) {
        const [cmd, data] = line.trim().split(' ');

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
