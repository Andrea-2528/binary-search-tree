import { Tree } from "./bst.js";

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

// Function that returns an array of random numbers from 1 to 100
const randomArray = () => {
    const array = [];
    // randomSize should be a random integer from 10 to 30
    const randomSize = Math.floor(Math.random() * 21) + 10;
    for (let i = 0; i < randomSize; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

const tree = new Tree(randomArray());
prettyPrint(tree.root);

console.log("Is balanced:");
console.log(tree.isBalanced());
console.log("Level order:", tree.levelOrder());
console.log("In order:", tree.inOrder());
console.log("Pre order:", tree.preOrder());
console.log("Post order", tree.postOrder());

console.log("Adding unbalancing elements (>100):");
tree.insertItem(102);
tree.insertItem(106);
tree.insertItem(115);
tree.insertItem(118);
tree.insertItem(103);
tree.insertItem(111);
tree.insertItem(120);
tree.insertItem(109);
tree.insertItem(108);
prettyPrint(tree.root);

console.log("Is balanced:");
console.log(tree.isBalanced());
console.log("Rebalance:");
tree.rebalance();
prettyPrint(tree.root);
console.log("Is balanced:");
console.log(tree.isBalanced());
console.log("Level order:", tree.levelOrder());
console.log("In order:", tree.inOrder());
console.log("Pre order:", tree.preOrder());
console.log("Post order", tree.postOrder());