/*
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/
5 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let zeroCount = 0
    for(let i = 0; i < nums.length; i+=1){
         if(nums[i] === 0){
             nums.splice(i, 1);
             zeroCount += 1
             i--;
         }    
    }
    for(let i = 0; i < zeroCount; i+=1){
        nums.push(0)
    }
    return nums // felt like returning anyway
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0
    for(let i = 0; i < nums.length; i+=1){
         if(nums[i] === 0){
             let val = nums.splice(i, 1);
             i--;
             nums.push(val)
         }    
    }
    return nums // felt like returning anyway
};


