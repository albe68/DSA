class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
  
    addChild(node) {
      this.children.push(node);
    }
  
  
    removeChild(node) {
      const index = this.children.indexOf(node);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  }
  
  
  // Create a sample tree structure
  const root = new TreeNode('A');
  const nodeB = new TreeNode('B');
  const nodeC = new TreeNode('C');
  const nodeD = new TreeNode('D');
  const nodeE = new TreeNode('E');
  
  
  root.addChild(nodeB);
  root.addChild(nodeC);
  nodeB.addChild(nodeD);
  nodeB.addChild(nodeE);
  
  
  // Print the tree structure using DFS traversal
  function printTreeDFS(node, depth = 0) {
    console.log(`${'  '.repeat(depth)}${node.value}`);
    for (const child of node.children) {
      printTreeDFS(child, depth + 1);
    }
  }
  
  
  console.log('DFS Traversal:');
  printTreeDFS(root);
  
  
  // Print the tree structure using BFS traversal
  function printTreeBFS(root) {
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);
      for (const child of node.children) {
        queue.push(child);
      }
    }
  }
  
  
  console.log('BFS Traversal:');
  printTreeBFS(root);
  
  
  
  
  