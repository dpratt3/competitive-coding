/*
1941. Check if All Characters Have Equal Number of Occurrences
25 March 2023
https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
David Pratt
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let str = s.split("");
  let strCount = {};

  // count characters using an object
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (strCount[key]) {
      strCount[key] += 1;
    } else {
      strCount[key] = 1;
    }
  }

  // if valSet is of size 1, all chars have same occurrence
  const vals = Object.values(strCount);
  let valSet = new Set(vals);
  return valSet.size === 1;
};
