# 595. Big Countries
# 26 March 2023
# https://leetcode.com/problems/big-countries/description/?envType=study-plan&id=sql-i
# David Pratt

# Write your MySQL query statement below

SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000;