const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const stack = []
const ans = []

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(value) {
    const node = new Node(value)
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue() {
    if (!this.head) {
      return null
    } else {
      const head = this.head
      this.head = head.next
      this.size--
      if (this.size === 0) {
        this.tail = null
      }
      return head.value
    }
  }
}

const queue = new Queue()

for (let i = 1; i < input.length; i++) {
  const [order, num] = input[i].split(' ')

  switch (order) {
    case 'push':
      queue.enqueue(Number(num))
      break
    case 'pop':
      ans.push(queue.size ? queue.dequeue() : -1)
      break
    case 'size':
      ans.push(queue.size)
      break
    case 'empty':
      ans.push(queue.size ? 0 : 1)
      break
    case 'front':
      ans.push(queue.size ? queue.head.value : -1)
      break
    case 'back':
      ans.push(queue.size ? queue.tail.value : -1)
      break
  }
}

console.log(ans.join('\n'))