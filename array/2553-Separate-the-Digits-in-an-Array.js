/*
2553-Separate-the-Digits-in-an-Array
https://leetcode.com/problems/separate-the-digits-in-an-array/
6 May 2023
David Pratt
*/ 

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var separateDigits = function(nums) {
    const splitNums = nums.map(x => x.toString().split(''));
    return splitNums.flat().map(x => Number(x));
};

