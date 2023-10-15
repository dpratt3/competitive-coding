/*
Tribonacci
https://www.structy.net/problems/tribonacci
15 October 2023
David Pratt
*/

// const tribonacci = (n) => {
//   if(n === 0 || n === 1 ) return 0;
//   if(n === 2) return 1;
//   return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
// };

const tribonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  console.log(memo)
  if (n === 0 || n === 1) return 0;

  if (n === 2) return 1;

  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
};

module.exports = {
  tribonacci,
};

