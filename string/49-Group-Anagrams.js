/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
12 April 2023
David Pratt
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// compare words to determine if they are anagrams
var anagramFinder = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  return word1.split("").sort().join("") === word2.split("").sort().join("");
};

// delete entries from word array after they've been considered
var deleteEntries = (strs, group) => {
  for (let i = 0; i < group.length; i++) {
    let idx = strs.indexOf(group[i]);
    strs.splice(idx, 1);
  }
  return strs;
};

var groupAnagrams = (strs) => {
  let outerArr = [];
  while (strs.length) {
    for (let i = 0; i < strs.length; i++) {
      // filter inter array, grouping by anagram status
      let group = strs.filter((word) => anagramFinder(strs[i], word));
      strs = deleteEntries(strs, group);
      outerArr.push(group);
    }
  }
  return outerArr;
};
