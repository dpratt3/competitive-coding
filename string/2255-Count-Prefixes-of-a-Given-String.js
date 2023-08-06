/* 
2255. Count Prefixes of a Given String
https://leetcode.com/problems/count-prefixes-of-a-given-string/
6 August 2023
David Pratt
*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

var countPrefixes = function(words, s) {
  // determine eligible prefixes
  let prefixes = []
  
  for(let j = 1; j <= s.length; j += 1){
    let str = "";
    for(let i = 0; i < j; i += 1){
        str += s[i]
    }
    prefixes.push(str)
  }

  return words.filter(word => prefixes.includes(word)).length;
};


