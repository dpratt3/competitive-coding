/*
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/
16 March 2023
David Pratt
*/

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let result = "";
    const str = x.toString();
    const n = str.length;
    if(x < 0){
        for(let i = n - 1; i > 0; i -= 1) result += str.charAt(i);
        result = Number(result);
    } else {
        for(let i = n - 1; i >= 0; i -= 1) result += str.charAt(i);
        result = Number(result);
    }
    
    let absVal = result;
    return x > 0 ? (absVal < Math.pow(2,31) - 1 ? absVal : 0) : 
                   (-absVal > -Math.pow(2,31) ? -absVal : 0);
    
    
};  