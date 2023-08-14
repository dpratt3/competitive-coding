/* 
Is Prime
https://www.structy.net/problems/is-prime
13 August 2023
David Pratt
*/

const isPrime = (n) => {
  for(let i = 2; i < n; i++){
    if(n % i === 0) return false;
  }
  return n > 1;
};
