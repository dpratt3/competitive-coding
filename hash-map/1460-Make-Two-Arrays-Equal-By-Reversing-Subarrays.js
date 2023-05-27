/*
1460. Make Two Arrays Equal by Reversing Subarrays
26 May 2023
https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
David Pratt
*/

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

arr2Obj = arr => {
    let obj = {};
    for(let i = 0; i < arr.length; i += 1){
        let key = arr[i];
        if(obj[key]) obj[key] += 1;
        else obj[key] = 1;
    }

    return JSON.stringify(obj)
}

var canBeEqual = function(target, arr) {
    const targetObjStr = arr2Obj(target);
    const targetArrStr = arr2Obj(arr);
    return targetObjStr === targetArrStr;
};
