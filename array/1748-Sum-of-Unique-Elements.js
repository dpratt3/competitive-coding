/*
1748. Sum of Unique Elements
https://leetcode.com/problems/sum-of-unique-elements/
28 April 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfUnique = function(nums) {
    let uniqueArr = [];
    
    // filter array to check for multiplicity
    for(let i = 0; i < nums.length; i += 1){
        let length = nums.filter(x => x === nums[i]).length;
        console.log(length)
        if(length === 1) uniqueArr.push(nums[i]);
    }

    return uniqueArr.reduce((acc, curr) => acc + curr, 0)
};
