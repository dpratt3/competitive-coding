// 1876. Substrings of Size Three with Distinct Characters
// 17 March 2023
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// David Pratt

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    const k = 3; // all strings of length 3
    let givenString = "";
    let goodStrings = []

    // begin with initial string of length 3
    for(let i = 0; i < k; i += 1){
        givenString += s.charAt(i);
    }

    if(new Set(givenString).size === 3){
        goodStrings.push(givenString)
    }

    for(let j = k; j < s.length; j++){
        givenString = givenString.slice(1, givenString.length) + s.charAt(j);
        let givenSet = new Set(givenString)
        if(givenSet.size === 3){
            goodStrings.push(givenString)
        }
    }
    return goodStrings.length
};