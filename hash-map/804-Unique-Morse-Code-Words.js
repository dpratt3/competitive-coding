/*
804. Unique Morse Code Words
16 March 2023
https://leetcode.com/problems/unique-morse-code-words/
David Pratt
*/

/**
 * @param {string[]} words
 * @return {number}
 */

const morseCodeArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const keys = "abcdefghijklmnopqrstuvwxyz"
const key_arr = [...keys] 
const dict = {}
for(let i = 0; i < 26; i++){
    dict[key_arr[i]] = morseCodeArr[i];
}

var uniqueMorseRepresentations = function(words) {

    let arr = [];
    for(let w = 0; w < words.length; w++){
        const currentWord = words[w];
        let currentMorseCode = "";
        for(let k = 0; k < currentWord.length; k++){
            currentMorseCode += dict[currentWord.charAt(k)];
        }
        arr.push(currentMorseCode);
    }
    let set = new Set(arr);
    return set.size;
};