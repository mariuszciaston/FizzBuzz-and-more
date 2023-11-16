// Iteration
function multiplesIteration(length) {
	let sum = 0;

	for (let i = 1; i < length; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}

	return sum;
}

console.log(multiplesIteration(10)); // 23

// --------------------------------------------------------

// Recursion
function multiplesRecursion(length, sum = 0) {
	if (length === 1) {
		return sum;
	}

	length -= 1;

	if (length % 3 === 0 || length % 5 === 0) {
		sum += length;
	}

	return multiplesRecursion(length, sum);
}

console.log(multiplesRecursion(10)); // 23
