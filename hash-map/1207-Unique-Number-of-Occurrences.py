/*
1207. Number of Unique Occurrences
https://leetcode.com/problems/unique-number-of-occurrences/
2 December 2023
David Pratt
*/

import numpy as np

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        map = {}
        for num in arr:
            if num in map:
                map[num] += 1
            else:
                map[num] = 1

        vals = list(map.values())
        unique_vals = np.unique(vals)      
        return len(vals) == len(unique_vals)
        
