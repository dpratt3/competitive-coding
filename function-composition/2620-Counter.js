/*
2620. Counter
16 June 2023
https://leetcode.com/problems/counter/
David Pratt
*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    n = n - 1;
    return function() {
        n = n + 1
        return n
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
