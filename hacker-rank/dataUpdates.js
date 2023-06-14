
/* 
David Pratt
14 June 2023
Hacker Rank
Problem: Data Updates
*/

/* 
Data for n days is provided to the intern. k updates are performed on the data.
Indices from [l, r] are negated. Data is index 1.
*/

/*
 * Complete the 'getFinalData' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY data
 *  2. 2D_INTEGER_ARRAY updates
 */

const negator = (arr, range) => {
    // correct indices to 
    const startIdx = range[0] - 1;
    const endIdx = range[1] - 1;
    
    for(let i = startIdx; i <= endIdx; i += 1){
        arr[i] = -1 * arr[i];
    }
    
    return arr;
}

function getFinalData(data, updates) {
    // Write your code here
    const updatedArr = updates.map(x => negator(data, x))
    return updatedArr[updatedArr.length - 1];
}
