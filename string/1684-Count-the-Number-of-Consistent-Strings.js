/*
1684. Count the Number of Consistent Strings
https://leetcode.com/problems/count-the-number-of-consistent-strings/
6 August 2023
David Pratt
*/
	
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

const setWords = words => {
    let setWords = words.map(x => new Set(x.split('')));
    return setWords;
}   

const subSetter = (subset, superset) => {
    for(char of subset){
        if(!superset.has(char)) return false;
    }

    return true;
}

countConsistentStrings = (allowed, words) => {
    let allowedSet = new Set(allowed);
    let wordSets = setWords(words);
    return wordSets.filter(set => subSetter(set, allowedSet)).length;
};
