/*
728. Self Dividing Numbers
https://leetcode.com/problems/self-dividing-numbers/
19 April 2023
David Pratt
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const selfDivider = (num) => {
  let numStr = num.toString().split("");
  let count = 0;

  for (let i = 0; i < numStr.length; i += 1) {
    if (num % Number(numStr[i]) === 0) count += 1;
  }

  return numStr.length === count;
};

var selfDividingNumbers = function (left, right) {
  let selfDivs = [];

  for (let i = left; i <= right; i += 1) {
    if (selfDivider(i)) selfDivs.push(i);
  }

  return selfDivs;
};
