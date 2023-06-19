/*
136. Single Number
https://leetcode.com/problems/single-number/
18 June 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let map = {}

    // count the number of occurrences
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) map[ nums[i] ] += 1;
        else map[nums[i]] = 1;
    }

    let entries = Object.entries(map);
    let filteredEntries = entries.filter(x => x[1] === 1)
    return Number(filteredEntries[0][0])

};
