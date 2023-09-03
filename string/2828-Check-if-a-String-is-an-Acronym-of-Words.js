/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let chars = words.map(x => x[0]);
    let testAcro = chars.join('');
    return testAcro === s;
};
