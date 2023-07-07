/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let table = {'a': 1,
                 'b': 2,
                 'c': 3,
                 'd': 4,
                 'e': 5,
                 'f': 6,
                 'g': 7,
                 'h': 8,
                 'i': 9,
                 'j': 10,
                 'k': 11,
                 'l': 12,
                 'm': 13,
                 'n': 14,
                 'o': 15,
                 'p': 16,
                 'q': 17,
                 'r': 18,
                 's': 19,
                 't': 20,
                 'u': 21,
                 'v': 22,
                 'w': 23,
                 'x': 24,
                 'y': 25,
                 'z': 26}
    
    // function to reverse table
    const revTable = table => Object.fromEntries(Object.entries(table).map(([k, v]) => [v, k]))
    let sArr = s.split('');
    
    for(let i = 0; i < sArr.length; i += 2){
        let key = sArr[i];
        let number = table[key];
        let newKey = number + Number(sArr[i + 1]);
        console.log(newKey)
        let newChar = revTable(table)[newKey];
        sArr[i + 1] = newChar;
    }

    return sArr.join('');     
};
