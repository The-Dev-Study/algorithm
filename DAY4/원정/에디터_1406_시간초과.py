import sys
input = sys.stdin.readline


words = list(input().strip())
m = int(input())

actionRecord = {}

for i in range(0, m):
    commandWithWord = list(input().split())
    word = "";
    try:
        word = commandWithWord[1]
    except IndexError:
        word = "";
    actionRecord[i] = {'action': commandWithWord[0], 'word': word }

word_len = len(words)
cursor_index = len(words)

for i in actionRecord:
    action = actionRecord[i]['action']
    if action == 'L':
        if cursor_index != 0:
            cursor_index -= 1
    if action == 'D':
        if cursor_index <= word_len:
            cursor_index += 1
    if action == 'B':
        if cursor_index != 0:
            del words[cursor_index - 1]
            word_len = len(words)
            cursor_index -= 1
    if action == 'P':
        words.insert(cursor_index, actionRecord[i]['word'])
        word_len = len(words)
        cursor_index += 1

print(''.join(words))
