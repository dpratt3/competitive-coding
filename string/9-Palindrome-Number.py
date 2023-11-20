/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/
19 November 2023
David Pratt
*/

def reverse(string):
    string = "".join(reversed(string))
    return string
    
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        stringX = reverse(str(x))
        return int(stringX) == x
