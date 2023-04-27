/*
145. Binary Tree Postorder Traversal
https://leetcode.com/problems/binary-tree-postorder-traversal/
5 April 2023
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
  if (node.right) traverse(node.right, visited);
  visited.push(node.val);
};

const postorderTraversal = (root) => {
  let visited = [];
  if (!root) return visited;
  traverse(root, visited);
  return visited;
};
