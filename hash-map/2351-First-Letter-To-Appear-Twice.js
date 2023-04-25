/*
2351. First Letter to Appear Twice
24 April 2023
https://leetcode.com/problems/check-if-the-sentence-is-pangram/
David Pratt
*/

/**
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i += 1) {
    let currentChar = s.charAt(i);
    if (!map[currentChar]) map[currentChar] = 1;
    else return currentChar;
  }
};
