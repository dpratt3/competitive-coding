/* 
David Pratt
14 June 2023
Hacker Rank
Problem: Positive Prefixes
*/

/*
Instructions: Rearrange the array to maximize the number of positive elements inthe psum array. Report the maximum number of positive elements that can be achieved in the array psum.
*/

/*
 * Complete the 'maxPosPrefixes' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const rearrangeArr = (arr) => {
    let pos = arr.filter(x => x > 0)
    let nonPos = arr.filter(x => x <= 0)
    pos.sort((a, b) => a - b)
    nonPos.sort((a, b) => b - a)
    return [...pos, ...nonPos]
}

const cumSum = arr => {
    let cumArr = []
    for(let i = 0; i < arr.length; i+= 1){
        let total = 0;
        for(let j = 0; j <= i; j += 1){
            total += arr[j]
        }
        cumArr.push(total)
    }
    return cumArr;
}

function maxPosPrefixes(arr) {
    const sortedArr = rearrangeArr(arr)
    const cumArr = cumSum(sortedArr)
    const filteredArr = cumArr.filter(x => x > 0)
    return filteredArr.length;
}


