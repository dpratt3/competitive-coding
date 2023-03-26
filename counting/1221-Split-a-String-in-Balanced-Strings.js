/*
1221. Split a String in Balanced Strings
25 March 2023
https://leetcode.com/problems/split-a-string-in-balanced-strings/
David Pratt
*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let dict = { R: -1, L: 1 };

  let n = s.length;
  let result = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += dict[s.charAt(i)];
    if (count == 0) result += 1;
  }
  return result;
};
