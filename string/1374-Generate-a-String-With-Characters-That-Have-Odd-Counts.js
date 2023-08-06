/*
1374. Generate a String With Characters That Have Odd Counts
https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
6 August 2023
David Pratt
*/

/**
 * @param {number} n
 * @return {string}
 */
 
var generateTheString = function(n) {
    let str = '';

    // if odd, return a string of only z's
    if(n % 2 !== 0){
        for(let i = 0; i < n; i += 1){
            str += "z";
        }

        return str;
    }

    // otherwise, return an odd number of z's with a y at the end
    for(let i = 0; i < n - 1; i += 1){
        str += "z";
    }

    return str + "y";
};


