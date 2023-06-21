// const array = [4, 3, 2, 1, 0, 55, 22, 66, 0, 22, 44];
// const sorted = array.sort((a, b) => a - b);
// console.log(sorted);

// ----------------------------------

const array = [4, 3, 2, 1, 0, 55, 22, 66, 0, 22, 44];

for (let i = 0; i < array.length - 1; i += 1) {
	for (let s = 0; s < array.length; s += 1) {
		if (array[s] > array[s + 1]) {
			const tmp = array[s];
			array[s] = array[s + 1];
			array[s + 1] = tmp;
		}
		// console.log(`${i} okrążenie`);
		// console.log(array);
	}
}

console.log(array);
