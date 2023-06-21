/*
67. Add Binary
https://leetcode.com/problems/add-binary/
21 June 2023
David Pratt
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    const binaryNum1 = BigInt("0b" + a);
    const binaryNum2 = BigInt("0b" + b);
    return (binaryNum1 + binaryNum2).toString(2);
};

