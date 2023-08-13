/*
1880. Check if Word Equals Summation of Two Words
https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
13 August 2023
David Pratt
*/

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

var isSumEqual = function(firstWord, secondWord, targetWord) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let firstWordSplit = firstWord.split('');
    let secondWordSplit = secondWord.split('');
    let targetWordSplit = targetWord.split('');

    for(let i = 0; i < firstWordSplit.length; i += 1){
        firstWordSplit[i] = letters.indexOf(firstWordSplit[i]);
    }

    for(let i = 0; i < secondWordSplit.length; i += 1){
        secondWordSplit[i] = letters.indexOf(secondWordSplit[i]);
    }

    for(let i = 0; i < targetWordSplit.length; i += 1){
        targetWordSplit[i] = letters.indexOf(targetWordSplit[i]);
    }

    console.log(firstWordSplit, secondWordSplit)
    let firstNum = Number(firstWordSplit.join(''));
    let secondNum = Number(secondWordSplit.join(''));
    let targetNum = Number(targetWordSplit.join(''));

    console.log(firstNum, secondNum, targetNum);
    return firstNum + secondNum === targetNum;
}

