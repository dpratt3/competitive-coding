/*
66. Plus One
https://leetcode.com/problems/plus-one/
21 June 2023
David Pratt
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
   let str = ""
   
   // turn digits into a string
   for(let i = 0; i < digits.length; i += 1){
       str += digits[i]
   }

   // Handle large integers
   let numString = BigInt(str) + BigInt(1)

   let finalStr = String(numString)
   let finalArr = []

   // load digits into an array 
   for(let i = 0; i < finalStr.length; i += 1){
       finalArr.push(Number(finalStr[i]))
   }

   return finalArr;
};

