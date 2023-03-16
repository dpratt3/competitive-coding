/*
771. Jewels and Stones
15 March 2023
https://leetcode.com/problems/jewels-and-stones/
David Pratt
*/


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function(jewels, stones) {
    const hash_set = new Set([...jewels]);
    let count = 0;
    for(let i = 0; i < stones.length; i++){
        if(hash_set.has(stones[i])){
            count += 1;
        }
    }
    return count;
};