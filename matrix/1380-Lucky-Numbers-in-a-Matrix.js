/*
1380. Lucky Numbers in a Matrix
https://leetcode.com/problems/lucky-numbers-in-a-matrix/
8 July 2023
David Pratt
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers  = function(matrix) {
    let columnMaxes = {};
    
    for(let j = 0; j < matrix[0].length; j += 1){    
        columnMaxes[j] = Math.max(...matrix.map(x => x[j]))
    }
    
    let columnMaxValues = Object.values(columnMaxes)
    
    let columnMins =  matrix.map(x => Math.min(...x))

    let commonVals = [];

    for(let i = 0; i < columnMaxValues.length; i += 1){
        if(columnMins.includes(columnMaxValues[i])){
            commonVals.push(columnMaxValues[i])
        }
    } 
    
    return commonVals;  
}

