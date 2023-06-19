/*
1221. Split a String in Balanced Strings
25 March 2023
https://leetcode.com/problems/split-a-string-in-balanced-strings/
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i += 1){
        let num = nums[i];
        if(map[num]) map[num] += 1;
        else map[num] = 1;
    }

    const floor = Math.floor( nums.length / 3)

    let entries = Object.entries(map)
    let filteredEntries = entries.filter(x => x[1] > floor)
    let filteredKeys = filteredEntries.map(x => Number(x[0]))

    return filteredKeys;
};
