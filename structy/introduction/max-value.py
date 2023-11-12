'''
Max Value
12 November 2023
https://structy.net/problems/max-value
David Pratt
'''

def max_value(nums):
  max = float('-inf')
  for i in range(len(nums)):
    if(nums[i] > max):
      max = nums[i]
  return max
