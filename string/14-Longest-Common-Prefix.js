/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/
13 April 2023
David Pratt
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (!strs || strs.length == 0) return "";
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i += 1) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix == "") return "";
    }
  }
  return prefix;
};
