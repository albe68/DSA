class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          return null;
        }
        currentNode = currentNode.children[char];
      }
  
      return currentNode;
    }
  
    getAllWordsFromNode(node, prefix = "") {
      let words = [];
  
      if (node.isEndOfWord) {
        words.push(prefix);
      }
  
      for (const [key, child] of Object.entries(node.children)) {
        words = words.concat(this.getAllWordsFromNode(child, prefix + key));
      }
  
      return words;
    }
  
    autocomplete(prefix) {
      const lastNode = this.search(prefix);
      if (!lastNode) {
        return [];
      }
      return this.getAllWordsFromNode(lastNode, prefix);
    }
  }
  
  // Example usage
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("application");
  trie.insert("appreciate");
  
  console.log(trie.autocomplete("app")); // ["apple", "application", "appreciate"]
  console.log(trie.autocomplete("a")); // ["apple", "application", "appreciate"]
  console.log(trie.autocomplete("b")); // []
  