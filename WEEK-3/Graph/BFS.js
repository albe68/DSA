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
    
    bfs(start) {
      const queue = [start];
      const visited = new Set();
      
      while (queue.length > 0) {
        const vertex = queue.shift();
        
        if (visited.has(vertex)) {
          continue;
        }
        
        visited.add(vertex);
        
        for (const neighbour of this.edges.get(vertex)) {
          queue.push(neighbour);
        }
      }
      
      return visited;
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
  graph.bfs("A"); // returns Set { "A", "B", "C", "D", "E" }
  