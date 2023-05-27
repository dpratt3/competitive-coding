
/*
938-Range-Sum-of-BST
26 April 2023
https://leetcode.com/problems/range-sum-of-bst/
David Pratt
*/

var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root]
    let visited = []
    
    while(queue.length){
        const levLen = queue.length;
        const levNodes = [];
        for(let i = 0; i < levLen; i += 1){
            let curr = queue.shift()
            levNodes.push(curr.val)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
         }
         visited.push(levNodes)
    }

    return visited;
};
