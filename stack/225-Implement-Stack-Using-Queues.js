/*
225. Implement Stack using Queues
24 April 2023
https://leetcode.com/problems/implement-stack-using-queues/
David Pratt
*/

var MyStack = function () {
  //two-queue implementation
  this.enqueue = [];
  this.dequeue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.enqueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.enqueue.length) this.dequeue.push(this.enqueue.shift());
  return this.dequeue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.enqueue.length) this.dequeue.push(this.enqueue.shift());
  return this.dequeue[this.dequeue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.dequeue.length === 0 && this.enqueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
