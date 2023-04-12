/*
1859. Sorting the Sentence
https://leetcode.com/problems/sorting-the-sentence/
12 April 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {string}
 */

const numberGather = (word) => word[word.length - 1]

var sortSentence = function(s) {
    let splitS = s.split(' ')
    const indices = splitS.map(word => Number(numberGather(word)))

    let newArr = []
    for(let i = 0; i < splitS.length; i++){
        newArr[indices[i] - 1] = splitS[i]
    }
    const finalSentence = newArr.map(x => x.slice(0, -1)).join(' ')
    
    return finalSentence;
};