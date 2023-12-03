/*
349. Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/
2 December 2023
David Pratt

*/

import numpy as np

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        unique_nums1 = np.unique(nums1)
        unique_nums2 = np.unique(nums2)

        intersect = []

        # select the array with shorter length

        if(len(nums1) <= len(nums2)):
            short_arr = nums1
            long_arr = nums2
        else:
            short_arr = nums2
            long_arr = nums1

        for num in short_arr:
            if num in long_arr:
                intersect.append(num)
        
        return np.unique(intersect)
        



        
