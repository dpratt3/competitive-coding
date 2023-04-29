
/*
470. Implement Rand10() Using Rand7()
https://leetcode.com/problems/implement-rand10-using-rand7/
29 April 2023
David Pratt
*/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

var rand10 = function() {
    return (rand7() + rand7() % 4);
};

