/*
290. Word Pattern
4 May 2023
https://leetcode.com/problems/word-pattern/
David Pratt
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function(pattern, s) {
    const splitPattern = pattern.split('');
    let splitS = s.split(' ');
    let dict = {}

    for(let i = 0; i < splitS.length; i += 1){
        dict[ splitPattern[i] ] = splitS[i];
    }

    let candidateArr = [];

    for(let i = 0; i < splitS.length; i += 1){
        candidateArr.push(dict[splitPattern[i]])
    }

    return ( candidateArr.join(' ') === s )
};
