//leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
https: var isAnagram = function (s, t) {
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
};
