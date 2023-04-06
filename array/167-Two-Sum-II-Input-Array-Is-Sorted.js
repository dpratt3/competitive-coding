/*
15. 2 Sum
//leetcode.com/problems/two-sum-ii-input-array-is-sorted/
5 April 2023
David Pratt
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
https: var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [];
};
