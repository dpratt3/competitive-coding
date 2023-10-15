/*
Undirected Path
https://www.structy.net/problems/undirected-path
15 October 2023
David Pratt
*/


const graphBuilder = edges => {
  let keys = edges.flat()
  let graph = {}
  // fill graph with its keys
  for(let i = 0; i < keys.length; i++){
    graph[keys[i]] = new Array();
  }
  // make edges symmetric
  let symEdges = edges
  for(let j = 0; j < symEdges.length; j++){
    graph[ symEdges[j][0] ].push(symEdges[j][1]);
  }
  symEdges = edges.map(x => x.reverse());
  for(let j = 0; j < symEdges.length; j++){
    graph[ symEdges[j][0] ].push(symEdges[j][1]);
  }
  return graph;
}

// iterative solution is self written
const hasPath = (graph, src, dst, visited = new Set()) => {
  const queue = [src];
  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    //avoid cyclicity
    if(visited.has(src)) return false; // if already visited, don't visit again
    visited.add(src)
    for (let neighbor of graph[current]) {
        queue.push(neighbor);
        if (hasPath(graph, neighbor, dst, visited) === true) {
        return true;    
      }
    }
    return false;
  }
};

const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = graphBuilder(edges);
  return hasPath(graph, nodeA, nodeB);
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

//console.log(graphBuilder(edges))
console.log(undirectedPath(edges, 'j', 'm')); // -> true));

module.exports = {
  undirectedPath
};
