/*
2206. Divide Array Into Equal Pairs
https://leetcode.com/problems/divide-array-into-equal-pairs/
8 May 2023
David Pratt
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if(nums.length %2 !== 0) return false;
    let dict = {};
    
    for(let i = 0; i < nums.length; i += 1){
        let key = nums[i];
        if(!dict[key]) dict[key] = 1;
        else dict[key] += 1;
    }
    
    let values = Object.values(dict)
    
    for(let i = 0; i < values.length; i+=1){
        if(values[i] % 2 !== 0) return false;
    }

    return true;
};
