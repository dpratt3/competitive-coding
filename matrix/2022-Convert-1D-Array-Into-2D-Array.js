/*
2022. Convert 1D Array Into 2D Array
https://leetcode.com/problems/convert-1d-array-into-2d-array/
30 July 2023
David Pratt
*/

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */

var construct2DArray = function(original, m, n) {
    if(original.length !== m * n) return []

    const arr = Array.from(Array(m), () => []);

    let k = 0;

    for(let i = 0; i < m; i += 1){
        for(let j = 0; j < n; j += 1){
            arr[i][j] = original[k]
            k += 1;
        }
    }

    return arr;
};
