/*
2325. Decode the Message
https://leetcode.com/problems/decode-the-message/
11 April 2023
David Pratt
*/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function(key, message) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let splitKey = key.split('')
    // console.log(alphabet, splitKey);
    let decoder = {" ": " "};
    let j = 0;

    for(let i = 0; i < splitKey.length; i++){
        if(decoder.hasOwnProperty(splitKey[i])){
            continue;
        }
        decoder[ splitKey[i] ] = alphabet[j]
        j++; 
    }

    let result = "";
    //console.log(decoder)
    for(let i = 0; i < message.length; i++){
        result += decoder[message.charAt(i)];
    }

    return result;
};