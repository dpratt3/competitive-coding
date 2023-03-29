/*
100. Same Tree
29 March 2023
https://leetcode.com/problems/same-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// modify traversal function to include null nodes
const traverse = (node, visited) => {
  if (node) {
    visited.push(node ? node.val : null);
    if (node.left) traverse(node.left, visited);
    else visited.push(null);
    if (node.right) traverse(node.right, visited);
    else visited.push(null);
  }
};

const inOrderTraversal = (root) => {
  let visited = [];
  if (!root) return visited;
  traverse(root, visited);
  return visited;
};

// compare arrays, entry by entry, to determine if they are equal
const identicalArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  }
  return true;
};

// Store identical arrays so their equivalency can be confirmed
var isSameTree = function (p, q) {
  let visitedP = inOrderTraversal(p);
  let visitedQ = inOrderTraversal(q);
  return identicalArr(visitedP, visitedQ);
};
