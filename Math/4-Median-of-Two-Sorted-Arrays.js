/*
4. Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/
16 March 2023
David Pratt
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const sort_all = (a, b) => a - b

var findMedianSortedArrays = function(nums1, nums2) {
    const all_nums = nums1.concat(...nums2).flat().sort(sort_all)
    const arr_length = all_nums.length
    if(arr_length % 2 !== 0){
        return all_nums[Math.floor(0.5 * arr_length)]
    } else {
        return 0.5 * (all_nums[0.5 * arr_length] + all_nums[0.5 * arr_length - 1])
    }
};