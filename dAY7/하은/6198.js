const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...buildings] = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

const stack = [];
let ans = 0;
let idx = 0;

while (n--) {
    const currentBuilding = Number(buildings[idx++]);

    // 스택에 빌딩이 있고, 가장 왼쪽 빌딩보다 현재 빌딩이 큰 경우
    while (stack.length > 0 && stack[stack.length - 1] <= currentBuilding) {
        stack.pop(); // 왼쪽 건물은 날 못보니 제거
    }

    // 현재 내 건물을 볼 수 있는 건물의 수 = 스택에 남은 건물들
    ans += stack.length;
    stack.push(currentBuilding);
}

console.log(ans);
