/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
5 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const roundCondition = s.includes("(") && s.includes(")") &&  s.indexOf("(") < s.indexOf(")");
    const squareCondition = s.includes("[") && s.includes("]") && s.indexOf("[") < s.indexOf("]");
    const squigglyCondition = s.includes("{") && s.includes("}") && s.indexOf("{") < s.indexOf("}");
    return roundCondition || squigglyCondition || squareCondition;
};