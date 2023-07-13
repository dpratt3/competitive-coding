/*
387.First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/
12 July 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const sArr = s.split('');
    
    let hashMap = {};

    for(let i = 0; i < s.length; i += 1){
        let key = sArr[i];
        if(!hashMap[key]) hashMap[key] = 1;
        else hashMap[key] += 1;
    }

    for(let i = 0; i < sArr.length; i += 1){
        let key = sArr[i]
        if(hashMap[key] === 1) return i; 
    }

    return -1;
};
