/*
345. Reverse Vowels of a String
https://leetcode.com/problems/reverse-vowels-of-a-string/
3 July 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU"
    let splitS = s.split('')
    let filteredVowels = splitS.filter(x => vowels.includes(x)).reverse();

    // fill in the original string with the reversed vowels
    let counter = 0;
    for(let i = 0; i < splitS.length; i+= 1){
        if(vowels.includes(splitS[i])){
            splitS[i] = filteredVowels[counter];
            counter += 1;
        }
    }

    return splitS.join('')
};

