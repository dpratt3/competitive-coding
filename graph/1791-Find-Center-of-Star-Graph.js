/*
1791. Find Center of Star Graph
3 April 2023
https://leetcode.com/problems/find-center-of-star-graph/
David Pratt
*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let [firstCandidate, secondCandidate] = edges[0]
    
    // if each subarray contains the above candidate, it is the center
    let firstSet = new Set(edges.map(x => x.includes(firstCandidate)))
    if(firstSet.has(true) && !firstSet.has(false)) return firstCandidate
    
    // either the first or the second candidate must be in each subarray
    return secondCandidate
};