/*
204. Count Primes
https://leetcode.com/problems/count-primes/
20 April 2023
David Pratt
*/

/**
 * @param {number} n
 * @return {number}
 */

const primeVerify = (num) => {
  if (num === 2) return true;
  for (let i = 2; i < num; i += 1) {
    if ((num / i) % 1 === 0) return false;
  }
  return true;
};

var countPrimes = function (n) {
  let counter = 0;

  if (n === 2) return 0;

  for (let i = 2; i <= n; i += 1) {
    if (primeVerify(i)) counter += 1;
  }

  return counter;
};
