/*
2496. Maximum Value of a String in an Array
https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
15 April 2023
David Pratt
*/

/**
 * @param {string[]} strs
 * @return {number}
 */

var stringLength = str => {
    if(Number(str) || Number(str) === 0) return Number(str)
    return str.length;
}

var maximumValue = function(strs) {
    strLengths = strs.map(str => stringLength(str))
    return Math.max(...strLengths); 
};
