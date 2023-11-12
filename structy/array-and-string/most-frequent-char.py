'''
Most Frequent Char
https://structy.net/problems/premium/most-frequent-char
12 November 2023
David Pratt
'''

def most_frequent_char(s):
    word_length = len(s)
    char_count = {}
    for char in s:
      if char in char_count:
        char_count[char] += 1
      else:
        char_count[char] = 1

    max_key = max(char_count, key=char_count.get)
    return max_key
