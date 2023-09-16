/*
Tree Includes
https://structy.net/problems/premium/tree-includes
16 September 2023
David Pratt
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
    if(root === null) return false;
    const values = [];
    const queue = [root];
    
    while(queue.length > 0){
      const current = queue.pop();
      if(current.val === target) return true
      if(current.left !== null) queue.push(current.left);
      if(current.right !== null) queue.push(current.right);
    }
    return false;
};
