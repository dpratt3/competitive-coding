/*
1200. Minimum Absolute Difference
https://leetcode.com/problems/minimum-absolute-difference/
27 April 2023
David Pratt
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */

var minimumAbsDifference = function(arr) {
    // sort the array to place closest elements next to each other
    let sortedArr = arr.sort((a, b) => a - b)
    let min = Infinity;
    
    // find the minimum entry
    for(let i = 0; i < arr.length - 1; i += 1){
        min = Math.min(arr[i + 1] - arr[i], min);
    }

    let adjArr = [];

    for(let i = 0; i < arr.length - 1; i += 1){
        if(arr[i + 1] - arr[i] <= min) adjArr.push( [ arr[i], arr[i + 1] ] )
    }

    return adjArr;
};
