/*
1678. Goal Parser Interpretation
https://leetcode.com/problems/goal-parser-interpretation/
12 April 2023
David Pratt
*/

/**
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};
