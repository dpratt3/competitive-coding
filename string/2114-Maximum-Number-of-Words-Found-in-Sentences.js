/*
2114. Maximum Number of Words Found in Sentences
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
11 April 2023
David Pratt
*/

/**
/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = function(sentences) {
    let answer = 0;
    sentences.map(x => {
        answer = Math.max(answer, x.split(' ').length);   
    })
    return answer;
};