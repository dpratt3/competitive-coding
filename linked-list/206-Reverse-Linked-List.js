/*
206. Reverse Linked List
19 March 2023
https://leetcode.com/problems/reverse-linked-list/
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

// iterative
// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;

//     while(curr){
//         let forward = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = forward;
//     }

//     return prev;   
// };

// recursive approach: https://www.youtube.com/watch?v=G0_I-ZF0S38

var reverseList = (head) => {
    if(!head) return null
    
    let newHead = head;
    if(head.next){
        newHead = reverseList(head.next);
        head.next.next = head;
        // console.log(head.val)
    }

    head.next = null;
    return newHead 
}
