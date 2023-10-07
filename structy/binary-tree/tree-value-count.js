/* 
Tree Value Count
https://www.structy.net/problems/premium/tree-value-count
7 October 2023
David Pratt
*/


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
    if(root === null) return 0;
    let values = 0;
    const queue = [root];
    
    while(queue.length > 0){
      const current = queue.shift();
      if(current.val === target) values += 1;
      if(current.left !== null) queue.push(current.left);
      if(current.right !== null) queue.push(current.right);
    }
     return values;
};

module.exports = {
  treeValueCount
};
