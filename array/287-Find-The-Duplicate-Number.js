/*
287. Find the Duplicate Number
https://leetcode.com/problems/find-the-duplicate-number/
4 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // set solution
    const set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])) return nums[i]
        else set.add(nums[i])
    }

    return -1
};