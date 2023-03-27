# 627. Swap Salary
# 27 March 2023
# https://leetcode.com/problems/swap-salary/?envType=study-plan&id=sql-i
# David Pratt

# Write your MySQL query statement below

UPDATE Salary SET sex = CASE 
  WHEN sex = 'm' THEN 'f' 
  WHEN sex = 'f' THEN 'm' END
  WHERE sex IN ('m','f');