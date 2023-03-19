/*
844. Backspace String Compare
18 March 2023
https://leetcode.com/problems/backspace-string-compare/
David Pratt
*/

// Define function to remove hash which will take string as input and process the string
var hash_removal = (s) => {
  let stack = [...s];
  // count hash
  let result = "";
  let hash_count = 0;
  while (stack.length) {
    let char = stack.pop();
    if (char === "#") {
      hash_count += 1;
    } else {
      if (hash_count > 0) {
        hash_count -= 1;
      } else {
        result = char + result; //prepend
      }
    }
  }
  return result;
};

var backspaceCompare = (s, t) => {
  return hash_removal(s) == hash_removal(t);
};
