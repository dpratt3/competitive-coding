1365. How Many Numbers Are Smaller Than the Current Number

/*
1365. How Many Numbers Are Smaller Than the Current Number
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
20 April 2023
David Pratt
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
    let arr = new Array(nums.length).fill(0); 
    
    for(let i = 0; i < nums.length; i += 1){
        arr[i] = nums.filter(x => x < nums[i]).length;
    }

    return arr;
};