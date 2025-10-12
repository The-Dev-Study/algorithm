const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(filePath, 'utf-8').toString().trim().split('\n').map(Number);

const stack = [];
const res = [];
let curNum = 0;

let pos = 0;

function push(num) {
    if (pos === N) return;
    stack.push(num);
    pos++;
    res.push('+');
}

function pop() {
    if (pos === 0) return;
    pos--;
    res.push('-');
    return stack.pop();
}

function peek() {
    return stack[pos - 1];
}

function isEmpty() {
    return pos === 0;
}
function solution() {
    for (let i = 0; i < input.length; i++) {
        const num = input[i];

        if (peek() === num) {
            console.log(stack);
            pop();
        }

        // 아직 해당 숫자가 스택에 들어간 적이 없다면
        else if (curNum < num) {
            // curNum ~ num 까지 모두 스택에 넣는다.
            for (let n = curNum + 1; n <= num; n++) {
                push(n);
            }
            curNum = num; // 최근 숫자를 num으로 바꾼다
            pop(); // 해당 숫자를 pop한다.
        }

        // 이미 스택에 들어갔던 숫자라면
        else if (curNum > num) {
            // 나올 때까지함
            while (true) {
                // 근데 안나오고 스택이 끝나면 'NO' 출력
                if (isEmpty()) {
                    console.log('NO');
                    return;
                }
                const popped = pop(); // 일단 pop
                if (popped === num) {
                    console.log(stack);
                    // pop한게 내가 찾는거면?
                    break; //탈출
                }
            }
        }
    }

    // 중간 종료되지 않고 다 돌았다면
    console.log(res.join('\n'));
}

solution();
