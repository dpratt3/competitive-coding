/*
2032. Two Out of Three
https://leetcode.com/problems/two-out-of-three/
28 April 2023
David Pratt
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 
var twoOutOfThree = function(nums1, nums2, nums3) {
    let counter = 0;
    let allArrs = [nums1, nums2, nums3]
    let flatArr = Array.from(new Set(allArrs.flat())) // unique array
    let threshArr = []; // hold 2 out of 3 occurrences 
    let includedCount;

    for(let i = 0; i < flatArr.length; i += 1){
        includedCount = allArrs.filter(x => x.includes(flatArr[i])).length
        if(includedCount > 1) threshArr.push(flatArr[i])
    }

    return threshArr;
};
