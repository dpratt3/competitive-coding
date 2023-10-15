/*
Create Linked List
https://www.structy.net/problems/premium/create-linked-list
15 October 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  if(!values) return null;
  let nodes = [];

  // create nodes
  for(let i = 0; i < values.length; i++){
    let node = new Node(values[i])
    nodes.push(node)
  }

  // link the nodes together
  for(let j = 0; j < values.length - 1; j++){
    nodes[j].next = nodes[j + 1]
  }

  if(!nodes[0]) return null;
  return nodes[0]
};

console.log(createLinkedList([]));

module.exports = {
  createLinkedList
};
