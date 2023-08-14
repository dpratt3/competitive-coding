/*
2810. Faulty Keyboard
https://leetcode.com/problems/faulty-keyboard/
13 August 2023
David Pratt
*/

/**
 * @param {string} s
 * @return {string}
 */

const excessIRemover = str => {
    if(str.split('ai').join('') === '') return str.split('').filter(x => x !== "i").join('')

    // remove i's that are repeated an even number of times
    str = str.split('ii').join('');

    str = str.split('');

    return str.join('');
}

var finalString = function(s) {
    s = excessIRemover(s);
    let i = 0;

    while(s.includes('i')){
        let idx = s.indexOf('i');
        if(idx > -1){
            let firstStr = s.split('').splice(0, idx).reverse().join('');
            let secondStr = s.split('').splice(idx + 1, s.length);
            s = firstStr + secondStr;
        }
    }

    return s.replaceAll(',', '');
};
