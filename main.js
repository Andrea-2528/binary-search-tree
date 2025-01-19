import { Tree } from "./bst.js";
// const testArray = [
// 	1, 43, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324, 1, 43, 4, 23, 8, 9, 4, 3, 5, 7,
// 	9, 67, 324, 32, 78, 42, 12,
// ];

const prettyPrint = (node, prefix = "", isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
	}
	console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
	}
};

const tree = new Tree([10, 8, 32, 9, 17, 82, 24, 21, 5, 1, 4, 7]);

// TEST
console.log("TESTS -------------------------------------------------------------");
// Insert test
console.log("Insert test -------------------------------------------------------------");
tree.insertItem(12);
tree.insertItem(62);
tree.insertItem(6);
tree.insertItem(2);
tree.insertItem(98);
prettyPrint(tree.root);

// Delete test
console.log("Delete test -------------------------------------------------------------");
tree.deleteItem(2);
tree.deleteItem(7);
tree.deleteItem(9);
prettyPrint(tree.root);

// Find test
console.log("Find test -------------------------------------------------------------");
console.log(" 24 -------------------------------------------------------------");
console.log(tree.find(24));
console.log(" 17 -------------------------------------------------------------");
console.log(tree.find(17));
console.log(" 10 -------------------------------------------------------------");
console.log(tree.find(10));


prettyPrint(tree.root);
// Level order test
console.log("Level order test -------------------------------------------------------------");
console.log(tree.levelOrder());

// In order test
console.log("In order test -------------------------------------------------------------");
console.log(tree.inOrder());

// Pre order test
console.log("Pre order test -------------------------------------------------------------");
console.log(tree.preOrder());

// Post order test
console.log("Post order test -------------------------------------------------------------");
console.log(tree.postOrder());
