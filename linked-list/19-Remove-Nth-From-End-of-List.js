/*
19. Remove Nth Node From End of List
4 April 2023
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    if(head === null) return;

    let curr = head;
    let fwd = head;

    // create gap between pointers
    for(let i = 0; i < n; i++){
        if(fwd === null) return
        fwd = fwd.next
    }

    if(fwd === null) return head.next; // remove head

    // move two pointers at the same time
    while(fwd.next !== null){
        fwd = fwd.next
        curr = curr.next
    }

    if(curr.next !== null) curr.next = curr.next.next

    return head;
};