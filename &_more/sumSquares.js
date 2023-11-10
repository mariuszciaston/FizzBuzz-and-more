// Function that sums squares of numbers in list that may contain more lists

function SumSquares(array) {
	if (array.length === 0) return 0;
	let total = 0;

	for (let i = 0; i < array.length; i += 1) {
		if (Array.isArray(array[i])) {
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
	}
	return total;
}

let array = [1, 2, 3];
console.log(SumSquares(array)); // 1 + 4 + 9 = 14

array = [[1, 2], 3];
console.log(SumSquares(array)); // 1 + 4 + 9 = 14

array = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(array)); // 1 = 1

array = [10, [[10], 10], [10]];
console.log(SumSquares(array)); // 100 + 100 + 100 + 100 = 400
