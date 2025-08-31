import sys
import math
input = sys.stdin.readline

n, k = input().split(" ")

clazz = {}

for i in range(0, int(n)):
    gender, grade = input().strip().split(" ")
    clazz[i] = {'gender': int(gender) + 1 , 'grade': int(grade)}

max_grade = 0
max_gender = 0
for key in clazz:
    if max_gender < clazz[key]['gender']:
        max_gender = clazz[key]['gender']
    if max_grade < clazz[key]['grade']:
        max_grade = clazz[key]['grade']


rst = [[0 for col in range(max_gender)] for row in range(max_grade)]

for key in clazz:
    gender = clazz[key]['gender']-1
    grade = clazz[key]['grade']-1
    rst[grade][gender] += 1
            
room = 0

for i in rst:
    for j in i:
        room += math.ceil(j / int(k))
            
print(room)