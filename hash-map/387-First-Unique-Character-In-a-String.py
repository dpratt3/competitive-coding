/*
387. First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/
3 December 2023
David Pratt
*/

class Solution:
    def firstUniqChar(self, s: str) -> int:
        dict = {}

        for letter in s:
            if letter in dict:
                dict[letter] +=1
            else:
                dict[letter] = 1

        for i in range(len(s)):
            if(s[i] != s[i + 1] & dict[s] == 1):
                return i
        return -1
        
