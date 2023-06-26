/*
744. Find Smallest Letter Greater Than Target
https://leetcode.com/problems/find-smallest-letter-greater-than-target/
25 June 2023
David Pratt
*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 
var nextGreatestLetter = function(letters, target) {
    let i = 0;
    while(letters[i] <= target){
        i += 1
        console.log(i)
    }

    const selectedChar = letters[i]

    if(!selectedChar) return letters[0]

    return selectedChar
};
