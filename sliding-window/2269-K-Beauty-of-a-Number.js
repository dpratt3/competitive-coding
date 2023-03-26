/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let numString = num.toString()
    let subString = ""
    for(let i = 0; i < k; i++){
        subString += numString.charAt(i)
    }

    let kBeauty = 0;

    if(num % Number(subString) === 0){
        kBeauty++
    }

    for(let j = k; j < numString.length; j++){
        subString = subString.substring(1)
        subString += numString.charAt(j)
        if(num % Number(subString) === 0){
            console.log('hello world')
            kBeauty++
        }
    }

    return kBeauty
};