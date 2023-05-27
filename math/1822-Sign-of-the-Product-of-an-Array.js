/*
1822. Sign of the Product of an Array
https://leetcode.com/problems/sign-of-the-product-of-an-array/
20 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function (nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i += 1) {
    product *= nums[i];
  }

  if (product < 0) return -1;
  else if (product > 0) return 1;
  else return 0;
};
