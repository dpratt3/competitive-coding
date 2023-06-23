/*
2652. Sum Multiples
https://leetcode.com/problems/sum-multiples/
23 June 2023
David Pratt
*/

/**
 * @param {number} n
 * @return {number}
 */
 
var sumOfMultiples = function(n) {
    let total = 0; 
    
    for(let i = 1; i <= n; i += 1){
        if(i % 7 === 0 || i % 5 === 0 || i % 3 === 0){
            total += i;
        }
    }

    return total;
};
