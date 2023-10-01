/*
Structy
https://www.structy.net/problems/premium/is-univalue-list
2023-09-30
David Pratt
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

valCounter = (arr) => {
  var counter = 1;
  var totals = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i+1]){
      counter++
    } else {
      totals.push(counter)
      counter = 1
    }
  }
  return Math.max(...totals);
}

// if the longest streak equals the length of the array, return true
const isUnivalueList = (head) => {
  let curr = head;
  if(!curr) return false;
  let nodes = []
  while(curr){
    nodes.push(curr.val)
    curr = curr.next;
  }
  return (nodes.length === valCounter(nodes))
};

