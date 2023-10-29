/*
191. Number of Bits
https://leetcode.com/problems/number-of-1-bits/
29 October 2023
David Pratt
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    return n.toString(2).split("").filter(x => x === "1").length;
};
