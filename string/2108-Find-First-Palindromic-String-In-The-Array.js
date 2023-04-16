/*
2108. Find First Palindromic String in the Array
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
14 April 2023
David Pratt
*/

/**
 * @param {string[]} words
 * @return {string}
 */

var isPalindrome = word => {
    return word.split('').reverse().join('') === word;
}

var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i += 1){
        if(isPalindrome(words[i])){
            return words[i];
        }
    }
    return "";
};