/*
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/
26 November 2023
David Pratt
*/


import numpy as np

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        unique_length = len( np.unique(nums) )
        return unique_length < len(nums)

        
