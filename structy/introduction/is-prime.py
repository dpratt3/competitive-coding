'''
Is Prime
https://structy.net/problems/is-prime
12 November 2023
David Pratt
'''

import math

  def is_prime(n):
      if n <= 1:
          return False
      if n == 2:
          return True
      square_root = math.ceil(n ** 0.5)
      for i in range(2, square_root + 1):
          if n % i == 0:
              return False
      return True

