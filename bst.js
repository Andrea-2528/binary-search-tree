// ---- Algorithm ----
// Initialize start = 0, end = array.length - 1
// mid = Math.floor((start + end) / 2)
// Create a tree node "A" with mid as root
// Recursively:
// Calculate mid of left subarray and make it root of left subtree of "A"
// Calculate mid of right subarray and make it root of right subtree of "A"

import { MergeSort } from "./mergesort.js";
export { Tree };

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array) {
		this.root = this.buildTree(
			this.sortArray(array),
			0,
			this.sortArray(array).length - 1
		);
	}

	buildTree(array, start, end) {
		if (start > end) {
			return null;
		}
		let mid = Math.floor((start + end) / 2);
		let root = new Node(array[mid]);
		root.left = this.buildTree(array, start, mid - 1);
		root.right = this.buildTree(array, mid + 1, end);
		return root;
	}

	// Merge sort and remove duplicates
	sortArray(array) {
		const sorted = MergeSort(array);
		const unique = [];
		for (let i = 0; i < sorted.length; i++) {
			if (unique.indexOf(sorted[i]) === -1) {
				unique.push(sorted[i]);
			}
		}
		console.log("Sorted array: " + unique);
		return unique;
	}

	insertItem(value) {
		const insertRecursive = (node, value) => {
			if (!node) {
				return new Node(value);
			}
			if (value === node.data) {
				return node;
			}
			if (value < node.data) {
				node.left = insertRecursive(node.left, value);
			} else if (value > node.data) {
				node.right = insertRecursive(node.right, value);
			}
			return node;
		};
		this.root = insertRecursive(this.root, value);
	}

	deleteItem(value) {
		const getSuccessor = (curr) => {
			curr = curr.right;
			while (curr !== null && curr.left !== null) {
				curr = curr.left;
			}
			return curr;
		};

		const deleteNode = (node, value) => {
			if (node === null) {
				return node;
			}
			if (node.data > value) {
				node.left = deleteNode(node.left, value);
			} else if (node.data < value) {
				node.right = deleteNode(node.right, value);
			} else {
				if (node.left === null) {
					return node.right;
				}
				if (node.right === null) {
					return node.left;
				}
				let successor = getSuccessor(node);
				node.data = successor.data;
				node.right = deleteNode(node.right, successor.data);
			}
			return node;
		};

		this.root = deleteNode(this.root, value);
	}

	find(value) {
		const findRecursive = (node, value) => {
			if (!node) {
				return null;
			}
			if (value === node.data) {
				return node;
			}
			if (value < node.data) {
				return findRecursive(node.left, value);
			} else if (value > node.data) {
				return findRecursive(node.right, value);
			}
		};
		return findRecursive(this.root, value);
	}

	levelOrder() {
		const queue = [];
		const result = [];
		queue.push(this.root);
		while (queue.length !== 0) {
			let node = queue.shift();
			result.push(node.data);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return result;
	}

	inOrder() {
		const result = [];
		const traverse = (node) => {
			if (node !== null) {
				traverse(node.left);
				result.push(node.data);
				traverse(node.right);
			}
		};
		traverse(this.root);
		return result;
	}

	preOrder() {
		const result = [];
		const traverse = (node) => {
			if (node !== null) {
				result.push(node.data);
				traverse(node.left);
				traverse(node.right);
			}
		};
		traverse(this.root);
		return result;
	}

	postOrder() {
		const result = [];
		const traverse = (node) => {
			if (node !== null) {
				traverse(node.left);
				traverse(node.right);
				result.push(node.data);
			}
		};
		traverse(this.root);
		return result;
	}

	// Height is defined as the number of edges in the longest path from a given node to a leaf node.
	height(node) {
		if (node === null) {
			return -1;
		}
		return 1 + Math.max(this.height(node.left), this.height(node.right));
	}

	// Depth is defined as the number of edges in the path from a given node to the tree’s root node.
	depth(node) {
		let steps = 0;
		const countSteps = (root, node) => {
			if (root === null) {
				return null;
			}
			if (root.data === node.data) {
				return steps;
			}
			if (node.data < root.data) {
				steps++;
				return countSteps(root.left, node);
			}
			if (node.data > root.data) {
				steps++;
				return countSteps(root.right, node);
			}
		};
		return countSteps(this.root, node);
	}

	// A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
	isBalanced() {
		const checkBalanced = (node) => {
			if (node === null) {
				return true;
			}
			let leftHeight = this.height(node.left);
			let rightHeight = this.height(node.right);
			if (Math.abs(leftHeight - rightHeight) > 1) {
				return false;
			}
			return checkBalanced(node.left) && checkBalanced(node.right);
		};
		return checkBalanced(this.root);
	}

	rebalance() {
		this.root = this.buildTree(
			this.inOrder(),
			0,
			this.inOrder().length - 1
		);
	}
}
