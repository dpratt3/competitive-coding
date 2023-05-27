/*
2154. Keep Multiplying Found Values by Two
https://leetcode.com/problems/keep-multiplying-found-values-by-two/
28 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

var findFinalValue = function(nums, original) {
    let idx;
    
    while(nums.includes(original)){
        idx = nums.indexOf(original);
        original *= 2;
        console.log(nums, original)
    }

    return original;
};
