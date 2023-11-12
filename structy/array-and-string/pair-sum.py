'''
Pair Sum
https://structy.net/problems/premium/pair-sum
12 November 2023
David Pratt
'''


def pair_sum(numbers, target_sum):
  number_count = len(numbers)
  for i in range(number_count):
      for j in range(i + 1, number_count):
          if(numbers[i] + numbers[j] == target_sum):
              return (i, j);
  return False;
  
