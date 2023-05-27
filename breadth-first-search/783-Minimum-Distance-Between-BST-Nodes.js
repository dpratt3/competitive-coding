/*
783. Minimum Distance Between BST Nodes
https://leetcode.com/problems/minimum-distance-between-bst-nodes/
27 May 2023
David Pratt
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const consecutiveDifferences = arr => {
    let diffs = [];
    for(let i = 0; i < arr.length - 1; i += 1){
        diffs.push(arr[i + 1] - arr[i]) 
    }

    return Math.min(...diffs);        
}


var minDiffInBST = function(root) {
    if(!root) return null;
    const values = [];
    const queue = [root];

    while(queue.length){
        const curr = queue.shift();
        values.push(curr.val);
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }

    const sortedValues = values.sort((a, b) => a - b);
    return consecutiveDifferences(sortedValues);
};


