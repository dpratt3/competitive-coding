/*
796. Rotate String
https://leetcode.com/problems/rotate-string/
15 July 2023
David Pratt
*/


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */


var rotateString = function(s, goal) {
    let sArr = s.split('');
    for(let i = 0; i < s.length; i += 1){
        let firstVal = sArr[0];
        sArr = sArr.slice(1);
        sArr.push(firstVal);
        console.log(sArr);
        if(sArr.join('') === goal){
            return true;
        }
    }
    
    return false;
};

