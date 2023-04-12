/*
1528. Shuffle String
https://leetcode.com/problems/shuffle-string/
11 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function(s, indices) {
    let arr = Array(s.length)
    for(let i = 0; i < s.length; i++){
        arr[indices[i]] = s.charAt(i);
    }
    return arr.join('');
};