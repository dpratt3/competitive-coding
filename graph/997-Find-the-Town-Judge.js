/*
997. Find the Town Judge
3 April 2023
https://leetcode.com/problems/find-the-town-judge/
David Pratt
*/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustJudge = (trust.filter(x => x[1] === n).length === trust.length)
    const judgeTrust = (trust.filter(x => x[0] === n).length === 0)
    if(trustJudge && judgeTrust) return n
    return -1
};