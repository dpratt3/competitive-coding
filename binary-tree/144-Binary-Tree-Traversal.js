/*
144. Binary Tree Preorder Traversal
https://leetcode.com/problems/binary-tree-preorder-traversal/
3 July 2023
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
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    if(!root) return [];
    let traversed = [];

    traversed.push(root.val);
    traversed = traversed.concat(preorderTraversal(root.left));
    traversed = traversed.concat(preorderTraversal(root.right));

    return traversed;
}


