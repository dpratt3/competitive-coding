/*
1773. Count Items Matching a Rule
https://leetcode.com/problems/count-items-matching-a-rule/
12 April 2023
David Pratt
*

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

https: var countMatches = function (items, ruleKey, ruleValue) {
  let mapping = { type: 0, color: 1, name: 2 };
  let answer = 0;

  for (let i = 0; i < items.length; i += 1) {
    if (items[i][mapping[ruleKey]] === ruleValue) answer += 1;
  }

  return answer;
};
