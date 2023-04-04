/*
997. Find the Town Judge
4 April 2023
https://leetcode.com/problems/find-the-town-judge/
David Pratt
*/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

const adjListMaker = (trust) => {
  let trustObj = {};
  trust.map((x) => {
    [key, value] = x;
    if (!trustObj[key]) trustObj[key] = [value];
    else trustObj[key].push(value);
  });
  return trustObj;
};

var findJudge = function (n, trust) {
  // handle edge cases
  if (trust.length === 0 && n > 1) return -1;
  if (n === 1) return 1;

  const trustObj = adjListMaker(trust);

  // make sure the judge doesn't trust anyone; get candidate judge
  let judgeCompliment = Object.keys(trustObj).map((x) => Number(x));
  let candidate;
  for (let i = 1; i <= n; i += 1) {
    if (!judgeCompliment.includes(i)) candidate = i;
  }
  console.log(candidate);
  let count = 0;

  for (key of Object.keys(trustObj)) {
    if (trustObj[key].includes(candidate)) count += 1;
  }

  // if the candidate is in every array, it is the judge
  if (count === judgeCompliment.length) return candidate;
  return -1;
};
