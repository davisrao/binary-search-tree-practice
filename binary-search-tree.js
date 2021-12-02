class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    
    if(this.root === null){
      this.root = newNode;
      return this;
    };
    
    console.log(this)
    
    let current = this.root;

    while (true) {
      if (val > current.val) {
        if(current.right === null){
          current.right = newNode
          return this
        }else{
          current = current.right
        }
      } 
      else if(val<current.val) {
        if(current.left === null){
          current.left = newNode
          return this
        }else{
          current= current.left

        }
      }
    }
  }

  insertRecursively(val, node=this.root) {
    
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    };

    if (val > node.val){
      if(node.right === null){
        node.right = new Node(val)
        return this
      }else{
        return this.insertRecursively(val,node.right)
      }

    }else if(val < node.val){
      if(node.left === null){
        node.left = new Node(val)
        return this
      }else{
        return this.insertRecursively(val,node.left)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    if(this.root === null){
      return undefined
    };

    let current = this.root;

    while(true){
      if(current.val === val){
        return current
      }else if (val > current.val){
        if(current.right === null){
          return undefined;
        }
        current = current.right
      }else{
        if(current.left === null){
          return undefined;
        }
        current = current.left
      }
    }
    
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val,node=this.root) {

    if(this.root === null){
      return undefined
    }

    if(val === node.val){
      return node
    }else if (val > node.val){
      if(node.right === null){
        return undefined
      }else{
        return this.findRecursively(val, node.right)
      }
    }else if(val < node.val){
      if (node.left === null){
        return undefined
      }else {
        return this.findRecursively(val,node.left)
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse (node){
      data.push(node.val);
      if(node.left !== null){
        traverse(node.left)
      }
      if(node.right !== null){
        traverse(node.right)
      }
    }
    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse (node){
      if(node.left !== null){
        traverse(node.left)
      }
      data.push(node.val);
      if(node.right !== null){
        traverse(node.right)
      }
    }
    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse (node){
      if(node.left !== null){
        traverse(node.left)
      }
      if(node.right !== null){
        traverse(node.right)
      }
      data.push(node.val);
    }
    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let current = this.root;
    let queue =[];

    queue.push(current);
    while(queue.length){
      current=queue.shift();
      data.push(current.val);
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }

    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = BinarySearchTree;
