// Parse a multi-dimensional array

function totalIntegers(array) {
	if (array.length === 0) return 0;

	let total = 0;
	const first = array.shift();

	if (Array.isArray(first)) {
		total += totalIntegers(first);
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);
