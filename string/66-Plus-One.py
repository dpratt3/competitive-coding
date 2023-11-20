/*
66. Plus One
https://leetcode.com/problems/plus-one/
19 November 2023
David Pratt

*/

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        string = ""

        for i in range(len(digits)):
           string += str(digits[i])
        new_num = str( int(string) + 1 )
        arr = []

        for i in range(len(new_num)):
           arr.append( int(new_num[i]) )

        return arr
