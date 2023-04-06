/*
155. Min Stack
6 April 2023
https://leetcode.com/problems/min-stack/
David Pratt
*/

var MinStack = function () {
  this.minVal = 2e31 - 1;
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (val <= this.minVal) {
    this.stack.push(this.minVal);
    this.minVal = val;
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */

MinStack.prototype.pop = function () {
  if (this.stack.pop() == this.minVal) {
    this.minVal = this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
