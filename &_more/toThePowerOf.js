/* eslint-disable no-restricted-syntax */
/* eslint-disable operator-assignment */

function iterativePow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i = i + 1) {
		result = result * x;
	}
	return result;
}

console.log(`iterative ${iterativePow(2, 2)}`);
console.log(`iterative ${iterativePow(2, 3)}`);
console.log(`iterative ${iterativePow(2, 4)}`);

// --------------------------------------------------

function recursivePow(x, n) {
	if (n === 1) {
		return x;
	}
	return x * recursivePow(x, n - 1);
}

console.log(`recursive ${recursivePow(2, 2)}`);
console.log(`recursive ${recursivePow(2, 3)}`);
console.log(`recursive ${recursivePow(2, 4)}`);

// // --------------------------------------------------

function recursivePowShorter(x, n) {
	return n === 1 ? x : x * recursivePowShorter(x, n - 1);
}

console.log(`recursive short ${recursivePowShorter(2, 2)}`);
console.log(`recursive short ${recursivePowShorter(2, 3)}`);
console.log(`recursive short ${recursivePowShorter(2, 4)}`);
