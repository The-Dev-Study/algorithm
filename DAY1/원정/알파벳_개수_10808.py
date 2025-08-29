word = input()

dic = {}

for x in range(97, 123):
    dic[chr(x)] = 0

for a in word:
    dic[a] += 1

for k in dic:
    print(dic[k], end=' ')