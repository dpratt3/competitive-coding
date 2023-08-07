/*
1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
6 August 2023
David Pratt
*/

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

const prefixValidator = (prefix, word) => {
    let splitWord = word.split(prefix)
    return splitWord[0] === '';
}


var isPrefixOfWord = function(sentence, searchWord) {
    let splitSent = sentence.split(' ');
    for(word of splitSent){
        if(prefixValidator(searchWord, word)){
            return splitSent.indexOf(word) + 1;
        }
    }

    return -1;
};


