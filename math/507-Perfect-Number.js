/*
507. Perfect Number
https://leetcode.com/problems/perfect-number/description/
29 November 2023
David Pratt
*/



/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
    let divisorSum = 0;
    
    for(let i = num - 1; i > 0; i -= 1){
        if(num % i === 0) divisorSum += i;
        if(divisorSum > num) return false;
    }

    return divisorSum === num;

};
