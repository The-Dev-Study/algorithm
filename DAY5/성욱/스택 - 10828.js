const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const stack = []
const ans = []

for (let i = 1; i < input.length; i++) {
  const [order, num] = input[i].split(' ')

  switch (order) {
    case 'push':
      stack.push(Number(num))
      break
    case 'pop':
      ans.push(stack.length ? stack.pop() : -1)
      break
    case 'size':
      ans.push(stack.length)
      break
    case 'empty':
      ans.push(stack.length ? 0 : 1)
      break
    case 'top':
      ans.push(stack.length ? stack[stack.length - 1] : -1)
      break
  }
}

console.log(ans.join('\n'))