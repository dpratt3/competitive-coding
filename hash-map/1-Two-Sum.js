/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force: 
/* 
var twoSum = function(nums, target) {
     let sum = 0;
     coords = []
     for(let i = 0; i < nums.length; i+=1){
         for(let j = i + 1; j < nums.length; j += 1){
             sum = nums[i] + nums[j];
             if(sum === target){
                 coords.push(i)
                 coords.push(j)
                 break;
             }
         }
     }
     return coords; 
}; 
*/

// Using hash map 

var twoSum = function(nums, target){
    dict = {}
    for(let i = 0; i < nums.length; i++){
        dict[nums[i]] = i
    }
    // { 3: 0, 2: 1, 4: 2}
    
    for(let j = 0; j < nums.length; j++){
        let x  = target - nums[j];
        if(dict.hasOwnProperty(x) && j != dict[x]){
            return [ dict[x], j]
        }
    }
    return []
}