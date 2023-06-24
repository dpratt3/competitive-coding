/*
1768. Merge Strings Alternately
https://leetcode.com/problems/merge-strings-alternately/
23 June 2023
David Pratt
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
var mergeAlternately = function(word1, word2) {
    const length1 = word1.length;
    const length2 = word2.length;
    const minLength = Math.min(length1, length2);
    
    let altStr = "";

    // alternate letters up to minimum length
    for(let i = 0; i < minLength; i += 1){
        altStr += word1[i] + word2[i]
    }

    // add excess string from longer string
    let excessStr = ""
    
    if(length1 > length2){
        excessStr += word1.slice(length2, length1)
    } else {
        excessStr += word2.slice(length1, length2)
    }

    return altStr + excessStr;
};
