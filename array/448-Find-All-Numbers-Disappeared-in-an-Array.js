/*
448. Find All Numbers Disappeared in an Array
https://leetcode.com/problems/find-the-duplicate-number/
5 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums){
    let missingNums = [];
    for(let i = 1; i <= nums.length; i++){
        if(!nums.includes(i)) missingNums.push(i)
    }
    return missingNums;
};