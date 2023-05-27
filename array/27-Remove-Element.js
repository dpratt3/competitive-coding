/*
27. Remove Element
https://leetcode.com/problems/remove-element/description/
25 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    
    while(nums.includes(val)){
        let idx = nums.indexOf(val);
        nums.splice(idx, 1)
    }

    return nums.length;
};
