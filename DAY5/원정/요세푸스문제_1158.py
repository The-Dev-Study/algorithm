class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def problem(n, k):
    head = Node(1)
    current = head
    for i in range(2, n+1):
        current.next = Node(i)
        current = current.next
    current.next = head

    result = []

    prev = current
    current = head
    while current.next != current:
        for _ in range(k-1):
            prev = current
            current = current.next
        result.append(current.data)
        prev.next = current.next
        current = prev.next

    result.append(current.data)
    return result

n, k = map(int, input().split(" "))
print(f'<{', '.join(map(str, problem(n, k)))}>')
        