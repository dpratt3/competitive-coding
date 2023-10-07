/*
Depth First Values
https://www.structy.net/problems/depth-first-values
7 October 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* added to print the stack */

stackPrint = arr => {
  if(arr.length === 0) return;
  console.log(arr[0].val);
  console.log('---');
  return stackPrint(arr.slice(1));
}

const depthFirstValues = (root) => {
    if(!root) return [];  
    const result = [];
    const stack = [root];
    while(stack.length > 0){

      // after popping off, add value
        const current = stack.pop();
        result.push(current.val);
    // must check if children exist before adding them to the stack!
    //if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
    if(current.right) stack.push(current.right)
    //console.log(stack.length);
    }
    return result;
}

/*
const depthFirstValues = (root) => {
  if(root === null) return [];
  const left = depthFirstValues(root.left)
  const right = depthFirstValues(root.right)
  return [root.val, ...left, ...right]
}
*/

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

depthFirstValues(a); 
console.log(depthFirstValues(a)); 


module.exports = {
  depthFirstValues
};
