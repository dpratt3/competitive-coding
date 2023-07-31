/* 
Delete Greatest Value in Each Row
https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
30 July 2023
David Pratt
*/

/**
 * @param {number[][]} gridif(grid)
 * @return {number}
 */

var deleteGreatestValue = function(grid) {
    let sortedGrid = grid.map(x => x.sort((a, b) => b - a));
    let sum = 0;

    for(let i = 0; i < grid[0].length; i += 1){
        sum += Math.max(...sortedGrid.map(x => x[i]))
    }
    
    return sum;
};
