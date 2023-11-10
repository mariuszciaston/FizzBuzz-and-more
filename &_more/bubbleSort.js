// const array = [4, 3, 2, 1, 0, 55, 22, 66, 0, 22, 44];
// const sorted = array.sort((a, b) => a - b);
// console.log(sorted);

// ----------------------------------

// Bubble sort
const array = [4, 3, 2, 1, 0, 55, 22, -66, 0, -22, 44];

for (let i = 1; i < array.length; i += 1) {
	for (let value = 0; value < array.length; value += 1) {
		if (array[value] > array[value + 1]) {
			const tmp = array[value];
			array[value] = array[value + 1];
			array[value + 1] = tmp;
		}
		console.log(array);
	}
}

console.log(array);
