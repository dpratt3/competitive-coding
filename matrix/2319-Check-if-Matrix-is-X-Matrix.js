/*
2319. Check if Matrix Is X-Matrix
https://leetcode.com/problems/check-if-matrix-is-x-matrix/
30 July 2023
David Pratt
*/

var checkXMatrix = function(grid) {
    let firstDiag = [];
    let secondDiag = [];

    // fill from the first diagonal
    for(let i = 0; i < grid.length; i += 1){
        firstDiag.push(grid[i][i]);
    }

    // fill from the second diagonal
    let j = 0;
    for(let i = grid.length - 1; i >= 0; i--){
        secondDiag.push(grid[i][j]);
        j += 1;
    }

    // diagonals may not contain 0
    if(firstDiag.includes(0) || secondDiag.includes(0)) return false;

    // add up diagonals
    let allDiagSum = [...firstDiag, ...secondDiag].reduce((a, b) => a + b);

    // If dimension of matrix is odd, subtract the double counted value
    const gridLength = grid[0].length
    if(gridLength % 2 !== 0) allDiagSum -= grid[ (gridLength - 1) / 2 ][ (gridLength - 1) / 2 ]

    // reduce twice to get full matrix sum
    let totalSum = grid.map(x => x.reduce( (a, b) => a + b)).reduce( (a, b) => a + b)

    return allDiagSum === totalSum;
};
