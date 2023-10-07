/*
Bottom Right Value
https://www.structy.net/problems/premium/bottom-right-value
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

const bottomRightValue = (root) => {
  // todo
    if(root === null) return []
    const queue = [root];
    let current = null;
    while(queue.length > 0){
      current = queue.shift();
      
      if(current.left !== null) queue.push(current.left);
      if(current.right !== null) queue.push(current.right);
    }
     return current.val;
};
