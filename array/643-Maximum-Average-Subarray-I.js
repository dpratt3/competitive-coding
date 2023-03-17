/*
643. Maximum Average Subarray I
https://leetcode.com/problems/maximum-average-subarray-i/
16 March 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // first, find for window size k
    let sum = 0
    let answer = 0

    // Get the orignal sum for first k values
    for(let i = 0; i < k; i++){
        sum += nums[i]    
    }   

    answer = sum
    // Process for rest of the window, one by one
    for(let i = k; i < nums.length; i++){
        sum = sum + nums[i] - nums[i - k]
        if(sum > answer){
            answer = sum;
        }
    }

    // Written answer
    return answer / k
};