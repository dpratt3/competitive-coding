/*
263. Ugly Number
https://leetcode.com/problems/ugly-number/
28 June 2023
David Pratt
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isUgly = function(n) {
    while(n % 2 === 0) n /= 2; // get rid of 2
    while(n % 3 === 0) n /= 3; // get rid of 3
    while(n % 5 === 0) n /= 5; // get rid of 5
    return n === 1;
};
