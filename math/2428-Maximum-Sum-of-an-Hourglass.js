/*
2428. Maximum Sum of an Hourglass
https://leetcode.com/problems/number-of-common-factors/submissions/934617433/
16 April 2023
David Pratt
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var commonFactors = function(a, b) {
    let min = Math.min(a, b)
    let divisors = []
    
    for(let i = 0; i <= min; i += 1){
        if(a % i === 0 && b % i === 0){
            divisors.push(i)
        }
    }
    
    return divisors.length;
};
