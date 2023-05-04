/*
169. Majority Element
4 May 2023
https://leetcode.com/problems/majority-element/
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let target = 0;
    let count = 0;

    // Implement Boyer-Moore Voting algorithm 
    for(num of nums){
        if(count === 0){
            target = num;
            count += 1;
        } else if(num === target) {
            count += 1;
        } else {
            count -= 1
        }
    }

    return target;
};
