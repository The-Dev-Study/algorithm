a = int(input())
b = int(input())
c = int(input())

num = str(a * b * c)

dic = {}

for i in range(0, 10):
    dic[i] = 0

for i in num:
    number = int(i)
    dic[number] += 1
    
for i in dic:
    print(dic[i])