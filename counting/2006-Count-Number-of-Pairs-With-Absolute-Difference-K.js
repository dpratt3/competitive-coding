/*
2006. Count Number of Pairs With Absolute Difference K
25 April 2023
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
David Pratt
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countKDifference = function (nums, k) {
  let diffCount = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (Math.abs(nums[i] - nums[j]) === k) diffCount += 1;
    }
  }

  return diffCount;
};
