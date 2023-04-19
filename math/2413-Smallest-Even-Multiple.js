/*
2413. Smallest Even Multiple
https://leetcode.com/problems/smallest-even-multiple/
19 April 2023
David Pratt
*/

/**
 * @param {number} n
 * @return {number}
 */

var smallestEvenMultiple = function (n) {
  if (n % 2 === 0) return n;
  return n * 2;
};
