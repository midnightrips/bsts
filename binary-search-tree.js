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
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (current.val > val) { // go to left if current node value is greater than the value you are inserting
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else { // if current node value is less than the insertion value go right
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    const newNode = new Node(val);

    if (node === null) {
      this.root = newNode;
      return this;
    }

    if (node.val > val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        node = node.left;
        this.insertRecursively(val, node);
      }
    } else { // if current node value is less than the insertion value go right
      if (node.right === null) {
        node.right = newNode;
      } else {
        node = node.right;
        this.insertRecursively(val, node);
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;

      current = val < current.val ? current.left : current.right;
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node.val === val) return node;

    node = val < node.val ? node.left : node.right;

    if (node) return this.findRecursively(val, node);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, out = []) {
    out.push(node.val);

    if (node.left) this.dfsPreOrder(node.left, out);
    if (node.right) this.dfsPreOrder(node.right, out);

    return out;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, out = []) {
    if (node.left) this.dfsInOrder(node.left, out);
    out.push(node.val);
    if (node.right) this.dfsInOrder(node.right, out);

    return out;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, out = []) {
    if (node.left) this.dfsPostOrder(node.left, out);
    if (node.right) this.dfsPostOrder(node.right, out);
    out.push(node.val);

    return out;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();
      visited.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
