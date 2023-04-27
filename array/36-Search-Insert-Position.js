/*
35. Search Insert Position
https://leetcode.com/problems/search-insert-position/
26 April 2023
David Pratt
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let idx = nums.indexOf(target);
    if(idx !== -1) return idx;
    else{
        nums.push(target)
        nums.sort((a, b) => a - b)
    }

    return nums.indexOf(target);
};  
