/*
327. Count of Range Sum
https://leetcode.com/problems/power-of-three/submissions/934624269/
16 April 2023
David Pratt
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
    return Number.parseFloat(Math.log(n) / Math.log(3)).toFixed(10) % 1 === 0;
};
