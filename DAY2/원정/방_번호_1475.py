import math
n =input()

dic = {}

for i in range(0, 10):
    dic[i] = 0
    
for i in n:
    number = int(i)
    if number == 6 or number == 9:
        dic[6] += 1
    else:
        dic[number] += 1
    
dic[6] = math.ceil(dic[6] / 2)

max = 0
for i in dic:
    if max < dic[i]:
        max = dic[i]

print(max)