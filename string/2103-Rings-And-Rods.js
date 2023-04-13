/*
2103. Rings and Rods
https://leetcode.com/problems/rings-and-rods/
12 April 2023
David Pratt
*/

/**
 * @param {string} rings
 * @return {number}
 */

var countPoints = function (rings) {
  let dict = {};
  for (let i = 0; i <= 9; i++) {
    dict[i.toString()] = new Set();
  }

  for (let i = 0; i < rings.length - 1; i += 2) {
    dict[rings.charAt(i + 1)].add(rings.charAt(i));
  }

  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (dict[i].size === 3) answer++;
  }

  return answer;
};
