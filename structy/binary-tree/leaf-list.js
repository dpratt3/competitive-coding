/*
Leaf List
https://www.structy.net/problems/premium/leaf-list
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

const leafList = (root) => {
    if(root === null) return [];
    const queue = [root];
    let leaves = [];
    while(queue.length){
      const current = queue.pop();
      if(!current.left && !current.right) leaves.push(current.val);
      if(current.right !== null) queue.push(current.right)
      if(current.left !== null) queue.push(current.left);
      //if(current.right !== null) queue.push(current.right);
    }
     return leaves;
};

