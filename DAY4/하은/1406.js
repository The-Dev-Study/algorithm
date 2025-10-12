const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/input.txt' : './input.txt';

const input = fs
    .readFileSync(filePath, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.trim());

let unused = 1;
const MX = 600001;

const dat = Array.from({ length: MX }, () => -1);
const nxt = Array.from({ length: MX }, () => -1);
const pre = Array.from({ length: MX }, () => -1);

let cursor = 0;

function erase() {
    if (cursor === 0) return;

    nxt[pre[cursor]] = nxt[cursor];
    if (nxt[cursor] !== -1) pre[nxt[cursor]] = pre[cursor];

    cursor = pre[cursor];
}

function insert(num) {
    dat[unused] = num;
    pre[unused] = cursor;
    nxt[unused] = nxt[cursor];

    if (nxt[cursor] !== -1) pre[nxt[cursor]] = unused;

    nxt[cursor] = unused;
    cursor = unused;
    unused++;
}

function shiftLeft() {
    if (cursor !== 0) cursor = pre[cursor];
}

function shiftRight() {
    if (nxt[cursor] !== -1) cursor = nxt[cursor];
}

function traverse() {
    const answer = [];
    let cur = nxt[0];

    while (cur !== -1) {
        answer.push(dat[cur]);
        cur = nxt[cur];
    }
    console.log(answer.join(''));
}

function solution() {
    let txt = input[0].split('');

    for (c of txt) {
        insert(c);
    }

    for (let i = 2; i < 2 + Number(input[1]); i++) {
        const cmd = input[i].split(' ');

        switch (cmd[0]) {
            case 'P':
                insert(cmd[1]);
                break;
            case 'L':
                shiftLeft();
                break;
            case 'B':
                erase();
                break;
            case 'D':
                shiftRight();
        }
    }

    traverse();
}

solution();
