/*
2716. Minimize String Length
https://leetcode.com/problems/minimize-string-length/
6 August 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {number}
 */

var minimizedStringLength = function(s) {
    let splitS = s.split('');
    let setS = new Set(splitS)
    return setS.size;
};
