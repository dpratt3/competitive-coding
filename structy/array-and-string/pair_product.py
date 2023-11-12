'''
Pair Product
https://structy.net/problems/premium/pair-product
12 November 2023
David Pratt
'''


def pair_product(numbers, target_prod):
  number_count = len(numbers)
  for i in range(number_count):
      for j in range(i + 1, number_count):
          if(numbers[i] * numbers[j] == target_prod):
              return (i, j);
  return False;
  
  

