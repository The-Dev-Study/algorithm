const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
	.map(Number)

const [N, K] = input

class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

let head = new Node(1)
let current = head

const result = []

for (let i = 2; i <= N; i++) {
	let newNode = new Node(i)
	current.next = newNode
	newNode.prev = current
	current = newNode
}

current.next = head
head.prev = current
current = head

for (let i = 0; i < N; i++) {
	for (let j = 0; j < K - 1; j++) {
		current = current.next
	}

	result.push(current.value)

	let nextNode = current.next
	current.prev.next = current.next
	current.next.prev = current.prev

	current = nextNode
}

console.log(`<${result.join(', ')}>`)