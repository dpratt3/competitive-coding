# 584. Find Customer Referee
# 26 March 2023
# https://leetcode.com/problems/find-customer-referee/?envType=study-plan&id=sql-i
# David Pratt

# Write your MySQL query statement below

SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL;