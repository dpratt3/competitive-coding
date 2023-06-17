/*
151. Reverse Words in a String
https://leetcode.com/problems/reverse-words-in-a-string/
17 June 2021
David Pratt
*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    let splitWords = s.split(" ");
    let splitArr = splitWords.reverse();

    // remove array entries that are empty strings
    splitArr = splitArr.filter(x => x !== "");
    
    let finalStr = "";
    
    for(let i = 0; i < splitArr.length - 1; i += 1){
        finalStr += splitArr[i] + ' ';
    }
    
    return finalStr + splitArr[splitArr.length - 1];
};
