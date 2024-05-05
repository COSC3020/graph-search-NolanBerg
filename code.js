function depthFirstSearch(graph, startNode, targetNode) {
    const visited = new Set();
    const path = [];

    function dfs(currentNode) {
        if (visited.has(currentNode)) {
            return false;
        }
        visited.add(currentNode);
        path.push(currentNode);
        if (currentNode === targetNode) {
            return true;
        }
        
        for (const neighbor of graph[currentNode]) {
            if (dfs(neighbor)) {
                return true;
            }
        }
        path.pop();
        return false;
    }

    dfs(startNode);
    return path;
}
module.exports = depthFirstSearch;
