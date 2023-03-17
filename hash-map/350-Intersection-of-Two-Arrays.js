/*
350 Intersection of Two Arrays II
16 March 2023
https://leetcode.com/problems/intersection-of-two-arrays/submissions/916566264/
David Pratt
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    nums1_set = new Set([...nums1])
    nums2_set = new Set([...nums2])
    let intersect = []
    for(const i of nums2_set){
        if(nums1_set.has(i)){
            intersect.push(i)
        }
    }
    return intersect
}