const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [_, inputs] = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n');

const towers = inputs.split(' ').map(Number);

const stack = Array.from({ length: towers.length + 1 });
let pos = 0;

const pop = () => {
    if (pos <= 0) return;
    return stack[pos--];
};

const push = (item) => {
    if (pos >= stack.length) return;
    pos++;
    stack[pos] = item;
};

const peek = () => {
    return pos > 0 ? towers[stack[pos]] : -1;
};

const res = [];

for (let idx = 0; idx < towers.length; idx++) {
    const tower = towers[idx];

    while (true) {
        if (pos <= 0) {
            res.push(0);
            push(idx);
            break;
        }
        // 현재 타워와 스택의 탑에 저장된 타워의 높이를 비교
        else if (tower < peek()) {
            // 왼쪽의 탑이 더 큰 경우
            res.push(stack[pos] + 1);
            push(idx);
            break;
        } else if (tower > peek()) {
            // 왼쪽의 탑이 현재 탑보다 작은 경우
            pop();
        }
    }
}

console.log(res.join(' '));
