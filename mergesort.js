export default MergeSort;

function Merge(arrA, arrB) {
	let i = 0,
		j = 0;
	let arrC = [];
	while (i <= arrA.length - 1 && j <= arrB.length - 1) {
		if (arrA[i] < arrB[j]) {
			arrC.push(arrA[i]);
			i++;
		} else if (arrA[i] > arrB[j]) {
			arrC.push(arrB[j]);
			j++;
		} else {
			arrC.push(arrA[i]);
			arrC.push(arrB[j]);
			i++;
			j++;
		}
	}
	while (i <= arrA.length - 1) {
		arrC.push(arrA[i]);
		i++;
	}
	while (j <= arrB.length - 1) {
		arrC.push(arrB[j]);
		j++;
	}
	return arrC;
}

export function MergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));

    return Merge(left, right);
}