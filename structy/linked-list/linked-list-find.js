/*
Linked List Find
https://www.structy.net/problems/linked-list-find/
19 August 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
const linkedListFind = (head, target) => {
  let curr = head;
  if(!curr) return false;
  while(curr){
    if(curr.val === target) return true
    curr = curr.next;
  }
  return false;
};
*/

const linkedListFind = (head, target) => {
  let curr = head;
  if(!curr) return false;
  if(curr.val === target) return true
  return linkedListFind(curr.next, target);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "d")); // true
