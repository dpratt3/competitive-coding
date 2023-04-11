/*
322. Coin Change
10 April 2023
https://leetcode.com/problems/coin-change/
David Pratt
*/


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    if(amount === 0) return 0;
    
    const memo = {}

    function helper(amount){
    
        if(amount === 0) return 0;

        if(amount < 0) return Infinity;

        if(memo[amount] !== undefined){
            return memo[amount]
        }

        let minCoins = Infinity;

        for(let coin of coins){
            minCoins = Math.min( helper( amount - coin) + 1, minCoins);
        }
        
        memo[amount] = minCoins;


        return minCoins;

    }

const result = helper(amount);
     if(result === Infinity || result === 0) {return - 1;}
     return result;
};