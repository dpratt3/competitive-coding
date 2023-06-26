/*
342. Power of Four
https://leetcode.com/problems/power-of-four/
25 June 2023
David Pratt
*/


*/

/**
 * @param {number} n
 * @return {boolean}
 */
 
var isPowerOfFour = function(n) {
    let x = Math.log(n) / Math.log(4);
    return x % 1 === 0;
};
