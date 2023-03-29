/*
94. Binary Tree Inorder Traversal
29 March 2023
https://leetcode.com/problems/binary-tree-inorder-traversal/
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

// recursive function
const traverse = (node, visited) => {
  if (node.left) traverse(node.left, visited);
  visited.push(node.val);
  if (node.right) traverse(node.right, visited);
};

const inorderTraversal = (root) => {
  let visited = [];
  if (!root) return visited;
  traverse(root, visited);
  return visited;
};
