/*
101. Symmetric Tree
28 March 2023
https://leetcode.com/problems/symmetric-tree/
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

isPalindrome = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
      if(arr[i] !== arr[j]) return false
      i += 1;
      j -= 1;
    }
    return true;
  }
  
  // check if every value in array is palindromic
  var isSymmetric = function(root) {
      const levels = levelOrder(root);
      const boolArr = levels.map(x => isPalindrome(x));
      const boolSum = boolArr.reduce((sum, a) => sum + a, 0);
      return boolSum === boolArr.length;
  };
  
  // push all tree levels 
  levelOrder = (root) => {
    if (!root) return [];
    const levels = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const levelNodes = [];
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        
        // we need null nodes to control for node position
        if (node === null) {
          levelNodes.push(null);
        } else {
          levelNodes.push(node.val);
          queue.push(node.left || null);
          queue.push(node.right || null);
        }
      }
  
      levels.push(levelNodes);
    }
  
    return levels;
  }