/*
2710. Remove Trailing Zeros From a String
https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
26 June 2023
David Pratt
*/

/**
 * @param {string} num
 * @return {string}
 */

var removeTrailingZeros = function(num) {
    let splitNum = num.split('');
    let length = splitNum.length - 1;

    while(splitNum[length] == 0){
        splitNum[length] = '';
        length -= 1;
    }

    return splitNum.join('');

};
