/*
28. Find the Index of the First Occurrence in a String
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
3 July 2023
David Pratt
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)) return -1
    
    let splitHaystack = haystack.split(needle)
    
    return splitHaystack[0].length;
};
