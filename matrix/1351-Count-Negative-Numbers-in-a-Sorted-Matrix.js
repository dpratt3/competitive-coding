/*
1351. Count Negative Numbers in a Sorted Matrix
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/?envType=study-plan-v2&envId=binary-search
4 July 2023
David Pratt
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
    const filteredGrid = grid.map(x => x.filter(y => y < 0))
    const gridLength = filteredGrid.map(x => x.length)
    return gridLength.reduce((a, b) => a + b)
};
