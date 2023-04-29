
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

// Passes the test cases but is wrong!

/*
var rand10 = function() {
    return (rand7() + rand7() % 4);
};
*/

// Correct solution

var rand10 = function() {
    let x = rand7();
    let y = rand7();

    // truncate sample space; dimension divisible by 10;
    while(x > 6) x = rand7();
    while(y > 5) y = rand7();

    // divide sample space into 10 regions of three and return
    if(x < 4) return y;
    return y + 5;
}

