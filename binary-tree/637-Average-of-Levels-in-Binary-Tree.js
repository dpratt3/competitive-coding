/*
637. Average of Levels in Binary Tree
https://leetcode.com/problems/average-of-levels-in-binary-tree/
4 July 2023
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
**/

var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root]
    let visited = []

    while(queue.length){
        const levLen = queue.length;
        const levNodes = [];
        for(let i = 0; i < levLen; i += 1){
            let curr = queue.shift()
            levNodes.push(curr.val)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
         }
         visited.push(levNodes)
    }

    return visited;
};

arrAvg = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

var averageOfLevels = function(root) {
    let levels = levelOrder(root);
    return levels.map(x => arrAvg(x))
}
