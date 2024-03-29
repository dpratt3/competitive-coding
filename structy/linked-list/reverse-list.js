/*
Reverse List
https://www.structy.net/problems/reverse-list
19 August 2023
David Pratt
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while(curr){
    const next = curr.next;
    curr.next = prev
    prev = curr
    curr = next;
  }
  return prev;
}
















