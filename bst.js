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

	// Methods
	buildTree() {}
	sortArray() {}
	insertItem() {}
	deleteItem() {}

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

	insertItem(value) {}

	deleteItem(value) {}
}
