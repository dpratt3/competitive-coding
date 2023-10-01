/*
Longest Streak
https://www.structy.net/problems/premium/longest-streak
30 September 2023
David Pratt
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

const longestStreak = (head) => {
  let curr = head;
  if(!curr) return 0;
  let nums = [];
  while(curr){
    nums.push(curr.val)
    curr = curr.next;
  }
  return valCounter(nums);
};

const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(3);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

console.log(longestStreak(a)); // 4
