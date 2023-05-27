/*
2520. Count the Digits That Divide a Number
https://leetcode.com/problems/count-the-digits-that-divide-a-number/
20 April 2023
David Pratt
*/

/**
 * @param {number} num
 * @return {number}
 */

const setNumber = (num) => {
  let stringNums = num.toString().split("");
  let numArr = stringNums.map((x) => Number(x));
  return numArr;
};

var countDigits = function (num) {
  let digitArr = setNumber(num);
  let counter = 0;
  for (let i = 0; i < digitArr.length; i += 1) {
    if (num % digitArr[i] === 0) counter += 1;
  }
  return counter;
};
