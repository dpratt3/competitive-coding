/*
2236. Root Equals Sum of Children
https://leetcode.com/problems/root-equals-sum-of-children/
3 July 2024
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
 * @return {boolean}
 */

// solution used in No. 104
var preorderTraversal = (root) => {
    if(!root) return [];
    let traversed = [];

    traversed.push(root.val);
    traversed = traversed.concat(preorderTraversal(root.left));
    traversed = traversed.concat(preorderTraversal(root.right));

    return traversed;
}

var checkTree = function(root) {
    if(!root) return false;

    const traversed = preorderTraversal(root)

    const total = traversed.reduce((a, b) => a + b)

    return total - root.val === root.val
};


