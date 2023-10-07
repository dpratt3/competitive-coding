/*
Level Averages
https://www.structy.net/problems/premium/level-averages
7 October 2023
David Pratt
*/



class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const arrAvg = (arr) => {
  total = 0;
  for(let i = 0; i < arr.length; i++) total += arr[i];
  return total / arr.length
}

// prior solution, refactored
const treeLevels = (root) => {
  if (root === null) return [];

  const levels = [];
  const queue = [{ node: root, levelNum: 0 }];
  while (queue.length > 0) {
    const { node, levelNum } = queue.shift();

    if (levels.length === levelNum) {
      levels[levelNum] = [node.val];
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
  }

  return levels;
};

const levelAverages = (root) => {
  return treeLevels(root).map(x => arrAvg(x))
};

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

console.log(levelAverages(a));















module.exports = {
  levelAverages
};
