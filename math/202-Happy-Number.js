/*
202. Happy Number
29 October 2023
https://leetcode.com/problems/happy-number/description/
David Pratt
*/

/**
 * @param {number} n
 * @return {boolean}
 */

const squareNumber = num => {
    let numString = num.toString().split('');
    let total = 0;

    for(let i = 0; i < numString.length; i += 1){
        total += Number(numString[i]) ** 2;
    }

    return total;
}

var isHappy = function(n) {
    let num = n;
    let visited = [];

    while(num !== 1){
        num = squareNumber(num)
        if(visited.indexOf(num) !== -1) return false
        visited.push(num)
    }

    return true;
};
