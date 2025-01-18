import { Tree } from "./bst.js";
const testArray = [
	1, 43, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 324, 1, 43, 4, 23, 8, 9, 4, 3, 5, 7,
	9, 67, 324, 32, 78, 42, 12,
];
const tree = new Tree(testArray);

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

prettyPrint(tree.root);

