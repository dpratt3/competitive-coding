/*
125 Valid Palindrome
//leetcode.com/problems/valid-palindrome/
5 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {boolean}
 */
https: var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
};
