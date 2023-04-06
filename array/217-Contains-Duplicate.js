/*
217. Contains Duplicate
leetcode.com/problems/contains-duplicate/
5 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
https: var containsDuplicate = function (nums) {
  let uniqueNums = new Set(nums);
  return uniqueNums.size !== nums.length;
};
