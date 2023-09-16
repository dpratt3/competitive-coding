/*
Max Root to Leaf Path Sum
https://structy.net/problems/premium/max-root-to-leaf-path-sum
16 September 2023
David Pratt
*/

const maxPathSum = (root) => {
  let curr = root;
  if(!curr) return -Infinity
  if(!curr.left && !curr.right) return curr.val; 
  console.log(curr.val);
  return curr.val + Math.max(maxPathSum(curr.left), maxPathSum(curr.right))  
} 

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

maxPathSum(a); // -> 18
