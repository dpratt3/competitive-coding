/*
136. Single Number
https://leetcode.com/problems/single-number/
22 October 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];

    let obj = {}
    for(let i = 0; i < nums.length; i += 1){
        let key = nums[i]
        if(obj[key]) obj[key] += 1
        else obj[key] = 1
    }

    let entries = Object.entries(obj)
    let singularEntries = entries.filter(x => x.includes(1))

    return Number(singularEntries[0][0])

};
