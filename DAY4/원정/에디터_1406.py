import sys
input = sys.stdin.readline

left = list(input().strip())
right = []

for _ in range(int(input())):
    command = list(input().split())
    action = command[0]
    if action == 'L':
        if left:
            right.append(left.pop())
    elif action == 'D':
        if right:
            left.append(right.pop())
    elif action == 'B':
        if left:
            left.pop()
    else:
        left.append(command[1])

left.extend(reversed(right))
print(''.join(left))