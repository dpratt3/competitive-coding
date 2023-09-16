/*
Breadth First Values
https://structy.net/problems/premium/breadth-first-values
16 September 2023
David Pratt
*/

const breadthFirstValues = (root) => {
  // todo
  
  if(root === null) return []
  const values = [];
  const queue = [root];
  
  while(queue.length > 0){
    const current = queue.shift();
    values.push(current.val);
    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right);
  }
   return values;
}

