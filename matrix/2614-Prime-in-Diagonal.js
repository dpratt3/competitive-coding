/*
2614. Prime in Diagonal
https://leetcode.com/problems/prime-in-diagonal/
30 July 2023
David Pratt
*/

/**
 * @param {number[][]} nums
 * @return {number}
 */

const isPrime = num => {
    if(num === 1) return false;
    
    let i = 2;

    while(i <= Math.sqrt(num)){
        if(num % i === 0) return false;
        i += 1;
    }

    return true;
}

var diagonalPrime = function(nums) {
    let firstDiag = [];
    let secondDiag = [];

    // fill from the first diagonal
    for(let i = 0; i < nums.length; i += 1){
        for(let j = 0; j < nums[0].length; j += 1){
            if(i === j) firstDiag.push(nums[i][j]);
        }
    }

    // fill from the second diagonal
    let j = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        secondDiag.push(nums[i][j]);
        j += 1;
    }

    const allDiags = [...firstDiag, ...secondDiag];
    const allPrimes = allDiags.filter(x => isPrime(x));

    if(allPrimes.length) return Math.max(...allPrimes);

    return 0;
};
