/*
1512. Number of Good Pairs
https://leetcode.com/problems/number-of-good-pairs/
26 May 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function(nums) {
    let coordCount = 0;
    for(let i = 0; i < nums.length; i += 1){
        for(let j = i + 1; j < nums.length; j += 1){
            if(nums[i] === nums[j]) coordCount += 1;
        }
    }

    return coordCount;
};
