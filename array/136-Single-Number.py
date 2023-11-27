/*
136. Single Number
https://leetcode.com/problems/single-number/
26 November 2023
David Pratt


*/

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        numCount = {};
        for num in nums:
            if num in numCount:
                numCount[num] += 1
            else:
                numCount[num] = 1
        
        for key, value in numCount.items():
            if value == 1:
                return key
        
        return -1
