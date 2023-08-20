/*
Sum List
https://www.structy.net/problems/sum-list
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
const sumList = (head) => {
  if(head === null) return 0
  let curr = head;
  let total = 0;
  while(curr){
    total += curr.val;
    curr = curr.next;
  }
  return total;
};
*/

const sumList = (head) => {
  if(!head) return 0
  //console.log(head.val);
  return head.val + sumList(head.next);
}
const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

console.log(sumList(x)); // 42


