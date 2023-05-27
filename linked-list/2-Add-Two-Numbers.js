/*
2. Add Two Numbers
25 May 2023
https://leetcode.com/problems/add-two-numbers/
David Pratt
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Function to create linked list from an array
arr2LL = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
}

var addTwoNumbers = function(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let arr1 = []
  let arr2 = []

  while(curr1){
    arr1.push(curr1.val);
    curr1 = curr1.next;
  }

  while(curr2){
    arr2.push(curr2.val);
    curr2 = curr2.next;
  }

  // scale each array by its place value
  let total1 = 0n; // Initialize as BigInt
  for(let i = arr1.length - 1; i >= 0; i--){
    total1 += BigInt(arr1[i]) * (10n ** BigInt(i)); // Use BigInt and ** for exponentiation
  }

  let total2 = 0n; // Initialize as BigInt
  for(let i = arr2.length - 1; i >= 0; i--){
    total2 += BigInt(arr2[i]) * (10n ** BigInt(i)); // Use BigInt and ** for exponentiation
  }

  // combine scaled arrays, turn them into strings, and then reverse
  let finalArr = (total1 + total2).toString().split('').reverse();

  let finalNums = finalArr.map(x => Number(x));

  // create a new linked list 
  const finalList = arr2LL(finalNums)

  return finalList;
};

