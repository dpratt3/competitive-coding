/*
1812. Determine Color of a Chessboard Square
https://leetcode.com/problems/determine-color-of-a-chessboard-square/
13 August 2023
David Pratt
*/

/**
 * @param {string} coordinates
 * @return {boolean}
 */

var squareIsWhite = function(coordinates) {
    let hash = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
    }

    let letter = coordinates[0];
    let number = Number(coordinates[1]);

    let bool1 = hash[letter] % 2 === 0 && number % 2 === 0;
    let bool2 = hash[letter] % 2 !== 0 && number % 2 !== 0;

    if(bool1 || bool2) return true;
    return false
};
