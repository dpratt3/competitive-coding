/* 
1232. Check If It Is a Straight Line
https://leetcode.com/problems/check-if-it-is-a-straight-line/
15 July 2023
David Pratt
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function(coordinates) {
    let coord1 = coordinates[0];
    let coord2 = coordinates[coordinates.length - 1];
    const m = (coord2[1] - coord1[1]) / (coord2[0] - coord1[0]);
    
    // edge case of infinite slope: x coordinates must match
    if(m === Infinity || m === -Infinity){
        let xCoord = coordinates.map(x => x[0]);
        if(new Set(xCoord).size === 1) return true;
    } 
    const b = coord1[1] - m * coord1[0]
    
    // all coordinates must satisfy y = mx + b
    for(coord of coordinates){
        if(coord[1] !== m * coord[0] + b) return false;
    }

    return true
};
