/* 
Max Value
https://www.structy.net/problems/max-value
13 August 2023
David Pratt
*/

const maxValue = (nums) => {
  let max = -Infinity;
  for(let val of nums) if(val > max) max = val;
  return max;
};
