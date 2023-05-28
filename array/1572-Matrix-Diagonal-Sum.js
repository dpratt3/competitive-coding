/*
1572. Matrix Diagonal Sum
https://leetcode.com/problems/matrix-diagonal-sum/
28 May 2023
David Pratt
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function(mat) {
    let total = 0;
    const matLength = mat.length;
    
    for(let i = 0; i < matLength; i += 1){
        total += mat[i][i];
    }

    for(let i = matLength - 1; i >= 0; i -= 1){
        total += mat[matLength - 1 - i][i];
    }

    // remove double counting of middle position
    if(matLength % 2 !== 0) total -= mat[ (matLength - 1) / 2][ (matLength - 1) / 2];
    
    return total;
};
