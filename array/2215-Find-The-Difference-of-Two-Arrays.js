/*
2215. Find the Difference of Two Arrays
https://leetcode.com/problems/find-the-difference-of-two-arrays/
26 May 2023
David Pratt
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function(nums1, nums2) {
    const combinedNums = [...nums1, ...nums2]
    let superSet = new Set(combinedNums)
    let arrNest = [[], []]

    for(let i of superSet){
        if(nums1.indexOf(i) === -1) arrNest[1].push(i)
        if(nums2.indexOf(i) === -1) arrNest[0].push(i)
    }

    return arrNest;
};


