/*
203. Remove Linked List Elements
21 March 2023
https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // check cornercases to begin: if head is null or needs to be removed
    if(!head) return null;

    while(head?.val === val) head = head.next  
    // iterate on linked list and inside loop, compare each node value with given value

    let curr = head
    while(curr){
        if(curr.val === val){
            // if match, prev.next = curr.next
            prev.next = curr.next
        } else {
            prev = curr;
            //curr = curr.next
        }
        curr = curr.next;
    }
    return head
};