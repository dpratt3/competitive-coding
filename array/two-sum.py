/*
1. Two Sum
https://leetcode.com/problems/two-sum/
19 November 2023
David Pratt


*/


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_length = len(nums)
        for i in range(num_length):
            for j in range(i + 1, num_length):
                if nums[i] + nums[j] == target:
                    return [i, j]
        
