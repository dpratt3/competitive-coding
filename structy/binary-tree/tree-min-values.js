/*
Tree Min Value
https://structy.net/problems/premium/tree-min-value
16 September 2023
David Pratt
*/

const treeMinValue = (root) => {
    if(root === null) return []
    const values = [];
    const queue = [root];
    
    let minVal = Infinity;
  
    while(queue.length > 0){
      const current = queue.pop();
      if(current.val < minVal) minVal = current.val;
      if(current.left !== null) queue.push(current.left);
      if(current.right !== null) queue.push(current.right);
    }
     //return Math.min(...values);
    return minVal;
};

