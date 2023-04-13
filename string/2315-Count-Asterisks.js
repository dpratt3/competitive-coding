/*
2315. Count Asterisks
https://leetcode.com/problems/count-asterisks/
12 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {number}
 */

var countAsterisks = function (s) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s.charAt(i) === "|" && count === 0) count += 1;
    else if (s.charAt(i) === "|" && count === 1) count -= 1;
    else if (s.charAt(i) === "*" && count === 0) result += 1;
  }
  return result;
};
