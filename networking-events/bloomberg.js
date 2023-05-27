// David Pratt
// 2023-05-12 Bloomberg networking event
// Problem: return the first index position after aligning a substring with its superstring
// if no match is found, -1
// 25 minute time limit

let str1 = "Bloomberg";
let sub1 = "bloom";

// const findSub = (str, sub) => str.toLowerCase().split(sub).indexOf(""); // wrong but elegant!

const findSub = (str, sub) => {
  // if substring is not present, return -1
  let idx = str.toLowerCase().split(sub).indexOf("");
  if (idx === -1) return -1;

  // otherwise return the index of the first occurrence
  let splitStr = str.toLowerCase().split(sub);

  return splitStr[0].length;
};

console.log(findSub(str1, sub1)); // should be zero

// edge case of two isms
let str2 = "nationalismism";
let sub2 = "ism";

console.log(findSub(str2, sub2)); // should be 8

// edge case where "substring" is longer than "superstring"
let str3 = "hello";
let sub3 = "helloworld";

console.log(findSub(str3, sub3)); // should be -1
