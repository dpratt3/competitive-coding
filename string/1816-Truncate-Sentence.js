/*
1816. Truncate Sentence
https://leetcode.com/problems/truncate-sentence/
14 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var truncateSentence = function(s, k) {
    let splitSent = s.split(" ");
    let str = "";
    
    for(let i = 0; i < k; i += 1){
        str += splitSent[i] + " ";
    }

    return str.trim()
};