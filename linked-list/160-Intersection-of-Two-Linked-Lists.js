/*
160. Intersection of Two Linked Lists
21 March 2023
https://leetcode.com/problems/intersection-of-two-linked-lists/
David Pratt
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
    let currA = headA
    let mapA = new Set()
    while(currA){
        // put all nodes into set
        mapA.add(currA)
        currA = currA.next
    }
  
    let currB = headB
    while(currB){
        // put all nodes into set
        if(mapA.has(currB)) return currB
        currB = currB.next
    }
  
    return null;
  };