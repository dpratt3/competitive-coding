/*
All Tree Paths
https://www.structy.net/problems/premium/all-tree-paths
15 October 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  if(!root) return null;
  if(root.val === target) return [root.val];

  const leftPathWithTarget = pathFinder(root.left, target);
  const rightPathWithTarget = pathFinder(root.right, target);

  if(leftPathWithTarget) return [ root.val, ...leftPathWithTarget];
  if(rightPathWithTarget) return [ root.val, ...rightPathWithTarget];

  return null;
};

// DFS search
const leafFinder = root => {
  if(!root) return null;
  let leaves = []
  let stack = [root]

  //BFS
  while(stack.length > 0){
    let curr = stack.pop()

    // definition of a leaf
    if(!curr.left && !curr.right) leaves.push(curr.val)

    if(curr.right) stack.push(curr.right)
    if(curr.left) stack.push(curr.left)

  }
  return leaves;
}

const allTreePaths = (root) => {
  leaves = leafFinder(root);
  return leaves.map(x => pathFinder(root, x));
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(allTreePaths(a)); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]













module.exports = {
  allTreePaths
};
