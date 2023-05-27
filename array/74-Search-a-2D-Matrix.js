/*
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
26 April 2023
David Pratt
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    let filteredMat = matrix.filter(x => x.includes(target))
    return filteredMat.length >= 1;
};

