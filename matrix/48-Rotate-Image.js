/*
48. Rotate Image
https://leetcode.com/problems/rotate-image/
7 July 2023
David Pratt
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    const matrixCopy = matrix;
    
    //load matrix values into array so that array can be overwritten
    let values = []
    
    for(let i = matrix.length - 1; i >= 0; i -= 1){
        for(let j = 0; j < matrix[0].length; j += 1){
            values.push(matrixCopy[j][i]);
        }
    }
    
    values.reverse()
    
    let k = 0;

    for(let i = 0; i < matrix.length; i += 1){
        for(let j = 0; j < matrix.length; j += 1){
            matrix[i][j] = values[k]
            k += 1
        }
    }
    return values;
};


