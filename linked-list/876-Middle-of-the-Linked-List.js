/*
876. Middle of the Linked List
19 March 2023
https://leetcode.com/problems/middle-of-the-linked-list/
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
 * @return {ListNode}
 */
var middleNode = function(head) {
    var slow = head;
    var fast = head;

    while(fast?.next?.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast.next){
        return slow.next
    }

    return slow
};