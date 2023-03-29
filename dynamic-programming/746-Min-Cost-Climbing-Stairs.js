/*
746. Min Cost Climbing Stairs
28 March 2023
https://leetcode.com/problems/min-cost-climbing-stairs/
David Pratt
*/


/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = (cost) => {
    const n = cost.length
    dp = new Array(n).fill(0);
    
    // base cases
    dp[0] = cost[0]
    dp[1] = cost[1]
    
    // fill dp array
    for(let i = 2; i < n; i+=1){
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
    }

    return Math.min(dp[n - 1], dp[n - 2])
};

