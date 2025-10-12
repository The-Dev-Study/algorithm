const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

function solution() {
    for (let i = 1; i <= Number(input[0]); i++) {
        const line = input[i];
        const MX = line.length;

        const dat = Array(MX + 1).fill(0);
        const pre = Array(MX + 1).fill(0);
        const nxt = Array(MX + 1).fill(0);

        dat[0] = pre[0] = nxt[0] = -1;

        let cursor = 0;
        let unused = 1;

        function shiftLeft() {
            if (cursor !== 0) cursor = pre[cursor];
        }

        function shiftRight() {
            if (nxt[cursor] !== -1) cursor = nxt[cursor];
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

        function erase() {
            if (cursor === 0) return;
            nxt[pre[cursor]] = nxt[cursor];
            if (nxt[cursor] !== -1) pre[nxt[cursor]] = pre[cursor];

            cursor = pre[cursor];
        }

        function traverse() {
            let cur = nxt[0];
            const answer = [];

            while (cur !== -1) {
                answer.push(dat[cur]);
                cur = nxt[cur];
            }
            console.log(answer.join(''));
        }

        for (c of line.split('')) {
            switch (c) {
                case '<':
                    shiftLeft();
                    break;
                case '>':
                    shiftRight();
                    break;
                case '-':
                    erase();
                    break;
                default:
                    insert(c);
            }
        }

        traverse(dat, nxt);
    }
}

solution();
