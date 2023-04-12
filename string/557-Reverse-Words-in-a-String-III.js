/*
557. Reverse Words in a String III
https://leetcode.com/problems/reverse-words-in-a-string-iii/
12 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {string}
 */
  
var reverseWords = function(s) {
    let revStr = ""
    for(let i = s.length - 1; i >= 0; i--){
        revStr += s.charAt(i)
    }

    let revWord = "";
    let splitRevStr = revStr.split(" ")
    for(let i = splitRevStr.length - 1; i >= 0; i--){
        revWord += splitRevStr[i] + " "
    }
    
    return revWord.trim();
};