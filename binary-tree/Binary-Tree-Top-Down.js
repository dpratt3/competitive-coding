/*
199. Binary Tree Right Side View
27 March 2023
Note: Problem does not appear on LeetCode
David Pratt
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example binary tree:
//       1
//     /   \
//    2     3
//   / \   / \
//  4   5 6   7

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7))
);

// Algorithm:
// 1. Initialize an empty dictionary called "visits" to store the visit at different levels.
// 2. Define a function called "traverse" that takes in the current node, the current level, and the horizontal position of the node.
// 3. If the current level is not yet in the dictionary "visits", add the current node to the dictionary with its horizontal position as the value.
// 4. Recursively traverse the left subtree of the current node by calling "traverse" with the left child node, the current level + 1, and the current horizontal position minus 1.
// 5. Recursively traverse the right subtree of the current node by calling "traverse" with the right child node, the current level + 1, and the current horizontal position plus 1.
// 6. Call the "traverse" function with the root node, the initial level of 0, and the horizontal position of 0.
// 7. Sort the dictionary "visits" based on the keys (levels) in ascending order.
// 8. For each level in the sorted dictionary, print the node with the smallest horizontal position first, followed by the next node with the smallest horizontal position, and so on.

const visits = {};

const traverse = (node, level, x_pos) => {
  if (!node) return null;

  // If x-position key is not in views, add it as key-value
  if (!(x_pos in visits)) visits[x_pos] = [node.val, level];

  traverse(node.left, level + 1, x_pos - 1);
  traverse(node.right, level + 1, x_pos + 1);
};

const top_down = (root, traverse) => {
  traverse(root, 0, 0);

  //console.log(visits);

  const sorted_visits = Object.entries(visits).sort(([a], [b]) => a - b);

  // console.log(sorted_visits);

  const nodes = sorted_visits.map((x) => x[x.length - 1][0]);
  nodes.map((x) => console.log(x));
};

top_down(root, traverse); // 4 2 1 3 7
