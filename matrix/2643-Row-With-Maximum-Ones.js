/*
2643. Row With Maximum Ones
11 May 2023
https://leetcode.com/problems/row-with-maximum-ones/
David Pratt
*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */

const oneCounter = (row) => row.filter(x => x === 1).length

var rowAndMaximumOnes = function(mat) {
    const counts = mat.map(x => oneCounter(x));
    let max = Math.max(...counts);
    let idx = counts.indexOf(max)
    return [idx, counts[idx]]
};

