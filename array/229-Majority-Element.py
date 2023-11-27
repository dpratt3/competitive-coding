/*
229. Majority Element II
https://leetcode.com/problems/majority-element-ii/
26 November 2023
David Pratt
*/

class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        n_3 = floor( len(nums ) / 3)
        maj_nums = []
        num_count = {}
        for num in nums:
            if num in num_count:
                num_count[num] += 1
            else:
                num_count[num] = 1

        print(num_count)

        for index, count in num_count.items():
            if count > n_3:
                maj_nums.append(index)
        
        return maj_nums
        
