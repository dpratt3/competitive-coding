/*
Linked List Values
https://www.structy.net/problems/linked-list-values
19 August 2023
David Pratt
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  // todo
  if(!head) return [];
  let curr = head;
  let nodeArr = [];
  while(curr){
    nodeArr.push(curr.val);
    curr = curr.next;
  }
  return nodeArr;
};

