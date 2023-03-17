# 15. 3Sum
# 17 March 2023
# https://leetcode.com/problems/3sum/
# David Pratt

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        map = {}
        for i in range(n):
            map[nums[i]] = i

        found = set()
        result = []

        for i in range(0, n-1):
            for j in range(i+1, n):
                x = nums[i]
                y = nums[j]
                z = -1 * (x+y) # x+y = -z

                if z in map and i != map[z] and j != map[z]:
                    trip = [x, y, z]
                    trip.sort()
                    if str(trip) in found:
                        continue
                    else:
                        found.add(str(trip))
                        result.append(trip)
        return result