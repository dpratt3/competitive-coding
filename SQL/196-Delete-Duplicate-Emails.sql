# 196. Delete Duplicate Emails
# 27 March 2023
# https://leetcode.com/problems/delete-duplicate-emails/?envType=study-plan&id=sql-i
# David Pratt

# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below+

DELETE row1
FROM Person row1, Person row2
WHERE row1.email = row2.email
AND row1.id > row2.id;

