class Graph {
    constructor() {
      this.vertices = new Set();
      this.edges = new Map();
    }
    
    addVertex(vertex) {
      this.vertices.add(vertex);
      this.edges.set(vertex, new Set());
    }
    
    addEdge(from, to) {
      this.edges.get(from).add(to);
      this.edges.get(to).add(from);
    }
    
    dfs(start) {
      const visited = new Set();
      this._dfsHelper(start, visited);
      return visited;
    }
    
    _dfsHelper(vertex, visited) {
      visited.add(vertex);
      
      for (const neighbour of this.edges.get(vertex)) {
        if (!visited.has(neighbour)) {
          this._dfsHelper(neighbour, visited);
        }
      }
    }
  }
  
  // Usage:
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.dfs("A"); // returns Set { "A", "B", "D", "C", "E" }
console.log(graph)  