/*
43. Multiply Strings
https://leetcode.com/problems/isomorphic-strings/submissions/
13 July 2023
David Pratt
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    if(new Set(s).size !== new Set(t).size) return false;

    let hashMap = {};
    
    for(let i = 0; i < s.length; i += 1){
      let key = s[i];
      hashMap[key] = t[i] 
    }

  let sArr = s.split(''); // strings are immutable in JS

  // Are arrays' sets the same size and can one become the other?
  for(let i = 0; i < sArr.length; i += 1){
    sArr[i] = hashMap[sArr[i]]
  }

  console.log(sArr.join(''))
  return sArr.join('') === t
};
