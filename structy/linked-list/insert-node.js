/*
Insert Node
https://www.structy.net/problems/premium/insert-node
30 September 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let count = 0;
  let curr = head;
  let node = new Node(value);
  if(index === 0){
    node.next = head
    return node;
  } 
  while(curr){
    // insert before the index
     if(count + 1 === index){
       let next = curr.next
       curr.next = node;
       node.next = next;
    }
    if(index === 0){
       node.next = head
       return node;
    }
    // console.log(curr.val, count);
    // console.log(curr.val);
    count++;
    curr = curr.next;
  }
  return head;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d


module.exports = {
  insertNode
};
