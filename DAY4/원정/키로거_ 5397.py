result = []
for _ in range(int(input())):
    word = list(input().strip())
    left = []
    right = []
    for i in word:
        if i == '<':
            if left:
                right.append(left.pop())
        elif i == '>':
            if right:
                left.append(right.pop())
        elif i == '-':
            if left:
                left.pop()
        else:
            left.append(i)
    left.extend(reversed(right))
    result.append(left)

for i in result:
    print(''.join(i))     
