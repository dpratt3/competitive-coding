/*
347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/
5 May 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 
var topKFrequent = function(nums, k) {
    let digitCount = {};
    for(let i = 0; i < nums.length; i += 1){
        if(!digitCount[ nums[i] ]) digitCount[ nums[i] ] = 1
        else digitCount[ nums[i] ] += 1 
    }

    const entries = Object.entries(digitCount);
    const values = Object.values(digitCount);
    let indices = []

    for(let i = 1; i <=  k; i += 1 ){
        let max = Math.max(...values);
        let idx = values.indexOf(max);
        indices.push(idx);
        values[idx] = -Infinity;
    }

    let finalArr = []
    for(let i = 0; i < indices.length; i += 1){
        finalArr.push( Number(entries[indices[i] ][0] ))
    }

    return finalArr;
};

