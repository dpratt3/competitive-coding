/*
1704 Determine if String Halves Are Alike
https://leetcode.com/problems/determine-if-string-halves-are-alike/
14 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const vowelCount = word => {
    const vowels = "AEIOUaeiou";
    let count = 0;
    for(let i = 0; i < word.length; i += 1){
        if(vowels.includes(word.charAt(i))) count += 1;
    }
    return count;
}

var halvesAreAlike = function(s) {
    let charLength = s.length;
    const firstHalf = s.substring(0, charLength / 2);
    const secondHalf = s.substring(charLength / 2);
    return vowelCount(firstHalf) === vowelCount(secondHalf);
};