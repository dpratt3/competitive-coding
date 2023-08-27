/*
Anagrams
https://structy.net/problems/premium/anagrams
27 August 2023
David Pratt
*/

const anagrams = (s1, s2) => {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
};

console.log(anagrams('cats', 'tocs'));
