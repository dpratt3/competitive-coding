
/*
1281. Subtract the Product and Sum of Digits of an Integer
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
27 April 2023
David Pratt
*/



/**
 * @param {number} n
 * @return {number}
 */
 
var subtractProductAndSum = function(n) {
    let nString = n.toString().split('')
    let sum = 0;
    let product = 1;
    
    for(let i = 0; i < nString.length; i += 1){
        product *= Number(nString[i]);
        sum += Number(nString[i]);
    }

    return product - sum;   
};
