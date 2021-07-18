-- https://github.com/mrinal1704/SQL-Leetcode-Challenge

SELECT DISTINCT
    Salary AS SecondHighestSalary
FROM
    Employee
ORDER BY Salary DESC
LIMIT 1 OFFSET 1
