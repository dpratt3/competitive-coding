/*
415. Add Strings
https://leetcode.com/problems/add-strings/
20 June 2023
David Pratt
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function(num1, num2) {
    return String(BigInt(num1) + BigInt(num2))
};
