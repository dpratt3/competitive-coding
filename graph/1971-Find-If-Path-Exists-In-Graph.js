/*
1971. Find if Path Exists in Graph
3 April 2023
https://leetcode.com/problems/find-if-path-exists-in-graph/
David Pratt
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// adjacency list approach, BFS (shift)

var validPath = function(n, edges, source, destination) {
    let visited = new Array()

    // start at source; traverse
    if(source == destination) return true;

    let adjacencyList = {};
    for(let i = 0; i < n; i++){
        adjacencyList[i] = []
        visited.push(false)
    }

    for(let i = 0; i < edges.length; i+=1){
        let [src, dest] = edges[i]
        adjacencyList[src].push(dest)
        adjacencyList[dest].push(src)
    }
    
    // start bfs
    let queue = []
    let node = source
        visited[node] = true;
        queue.push(node); 
            while (queue.length > 0) {
                let visiting = queue.shift();
                for (let j = 0; j < adjacencyList[visiting].length; j++) {
                if ((visited[adjacencyList[visiting][j]] === false)) { 

                visited[adjacencyList[visiting][j]] = true;
                queue.push(adjacencyList[visiting][j]);
                }
             }
           }
    

    return visited[destination]
};

// using matrix approach, DFS (pop)

var validPath = function(n, edges, source, destination) {
    let visited = new Array(n).fill(false);

    // start at source; traverse
    if(source == destination) return true;

    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(new Array(n).fill(false));
    }

    for (let i = 0; i < edges.length; i++) {
        let [src, dest] = edges[i]
        matrix[src][dest] = true;
        matrix[dest][src] = true;
    }

    // start bfs
    let queue = [];
    let node = source;
    visited[node] = true;
    queue.push(node);
    while (queue.length > 0) {
        let visiting = queue.pop();
        for (let j = 0; j < n; j++) {
            if (matrix[visiting][j] && !visited[j]) {
                visited[j] = true;
                queue.push(j);
            }
        }
    }

    return visited[destination];
};
