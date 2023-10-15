/*
Has Path
https://www.structy.net/problems/has-path
15 October 2023
David Pratt
*/

const hasPath = (graph, src, dst) => {
  const stack = [ src ];
  let visited = new Set();
  while(stack.length > 0){
    const curr = stack.pop();
    visited.add(curr.toString()) // deal with coordinates
    //console.log(curr);
    for(let neighbor of graph[curr]){
      //added to cope with cyclicity
      if(!visited.has(neighbor)){
        stack.push(neighbor);
        visited.add(neighbor.toString());
      }
    }
  }
  return visited.has(dst);
};

// const hasPath = (graph, src) => {
//   const stack = [ src ];
//   let visited = new Set();
//   while(stack.length > 0){
//     const curr = stack.pop()
//     visited.add(curr)
//     console.log(curr);
//     for(let neighbor of graph[curr]){
//       stack.push(neighbor);
//     }
//   }
//   return visited;
// };

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPath(graph, 'f', 'j')); // false

