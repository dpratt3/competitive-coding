# 183. Customers Who Never Order
# 26 March 2023
# https://leetcode.com/problems/customers-who-never-order/?envType=study-plan&id=sql-i
# David Pratt

# Write your MySQL query statement below

SELECT Customers.name AS Customers
FROM Customers 
WHERE id NOT IN(SELECT customerId FROM Orders);