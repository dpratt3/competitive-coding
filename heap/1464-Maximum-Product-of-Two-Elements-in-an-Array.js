/*
1464. Maximum Product of Two Elements in an Array
https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
1 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let firstMax = nums.pop() - 1;
  let secondMax = nums.pop() - 1;
  return firstMax * secondMax;
};
