import sys
input = sys.stdin.readline

n = input()
lst = list(map(int, input().split(" ")))
v = int(input())

rst = 0
for i in lst:
    if i == v:
        rst += 1

print(rst)