/*
2000. Reverse Prefix of Word
https://leetcode.com/problems/reverse-prefix-of-word/
27 June 2023
David Pratt
*/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

reversePrefix = (word, ch) => {
  let index = word.indexOf(ch);
  
  if (index < 0) return word;

  const revSeg = word.slice(0, index + 1).split('').reverse().join('');
  const remSeg = word.slice(index + 1);
  
  return revSeg + remSeg;
}
