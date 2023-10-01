/*
Tree Sum
https://structy.net/problems/premium/tree-sum
16 September 2023
David Pratt
*/

const treeSum = (root) => {
    if(root === null) return 0;
    let values = 0;
    const queue = [root];
    
    while(queue.length > 0){
      const current = queue.shift();
      values += current.val;
      if(current.left !== null) queue.push(current.left);
      if(current.right !== null) queue.push(current.right);
    }
     return values;
};

// const treeSum = (root) => {
//   if (root === null) return 0;

//   return root.val + treeSum(root.left) + treeSum(root.right);
// };
