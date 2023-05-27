/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/
16 April 2023
David Pratt
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    let xStr = x.toString()
    
    let revStr = '';
    for(let i = xStr.length - 1; i >= 0; i -= 1){
        revStr += xStr.charAt(i);
    }

    return Number(revStr) === x
};
