/*
Get Node Value
https://www.structy.net/problems/get-node-value
19 August 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* iterative
const getNodeValue = (head, index) => {
  let curr = head;
  let vals = []
  let idx = 0
  if(!curr) return null;
  while(curr){
    if(idx === index) return curr.val
    idx++
    curr = curr.next;
  }
  return null;
};
*/

// recursive
const getNodeValue = (head, index) => {
  let curr = head;
  if(!curr) return null;
  if(index === 0) return curr.val
  console.log(index)
  return getNodeValue(curr.next, --index)
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 7); // null
