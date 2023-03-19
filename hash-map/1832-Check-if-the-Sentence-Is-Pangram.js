/*
1832. Check if the Sentence Is Pangram
16 March 2023
https://leetcode.com/problems/check-if-the-sentence-is-pangram/
David Pratt
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let charset = new Set([...sentence]);
    console.log(charset)
    return charset.size == 26;
};