/*
234. Palindrome Linked List
21 March 2023
https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */

var isPalindrome = function(head) {
    // find the middle of the linked list
    let slow = head; 
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Compare the first half of the linked list to reverse of second half
    let p1 = head;
    let p2 = prev;
    while(p2){
        if(p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true
};