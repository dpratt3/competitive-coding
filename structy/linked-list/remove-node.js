/*
Remove Node
https://www.structy.net/problems/premium/remove-node
30 September 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  let prev = null;
  let curr = head;
  if (curr.val === targetVal) return curr.next;
  if(!curr) return null;
  while(curr){
    if(curr.val === targetVal){
      prev.next = curr.next; // step that actually deletes
      console.log(prev.next);
      break;
    }
    prev = curr;
    curr = curr.next
  }
  return head;
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(removeNode(a, "c"));
// a -> b -> d -> e -> f

module.exports = {
  removeNode
};
