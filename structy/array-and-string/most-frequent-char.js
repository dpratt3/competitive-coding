/*
Most Frequent Char 
https://structy.net/problems/premium/most-frequent-char
27 August 2023
David Pratt
*/

const mostFrequentChar = (s) => {
  let obj = {}
  for(let i = 0; i < s.length; i++){
    let key = s[i]
    if(obj[ key ] ) obj[ key ]++;
    else obj[ key ] = 1;
  }
  let vals = Object.values(obj);
  let keys = Object.keys(obj);
  let max = Math.max(...vals);
  let idx = vals.indexOf(max);
  return keys[idx];
};

console.log(mostFrequentChar('bookeeper'));
