/*
Uncompress
https://structy.net/problems/premium/uncompress
27 August 2023
David Pratt
*/

const uncompress = (s) => {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let chars = s.split('').filter(x => letters.includes(x))
  let nums = s.split(/[abcdefghijklmnopqrstuvwxyz]/)
  let splitStr = '';
  for(let i = 0; i < chars.length; i++){
    for(let j = 0; j < nums[i]; j++){
      splitStr += chars[i]
    }
  }
  return splitStr;
};


console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'



