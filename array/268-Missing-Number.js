/*
268. Missing Number
https://leetcode.com/problems/missing-number/
24 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  let max = nums.length;

  for (let i = 0; i <= max; i += 1) {
    if (!nums.includes(i)) return i;
  }
};
