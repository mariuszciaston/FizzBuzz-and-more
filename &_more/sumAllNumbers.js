// Sum all numbers till the given one
// For instance:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Using a for loop.
function sumToIteration(n) {
	let sum = 0;

	for (let i = n; i > 0; i -= 1) {
		sum += i;
	}

	return sum;
}

console.log(`Iteration ${sumToIteration(4)}`); // 10
console.log(`Iteration ${sumToIteration(100)}`); // 5050

// Using recursion.
function sumToRecursion(n) {
	if (n === 1) {
		return 1;
	}

	return n + sumToRecursion(n - 1);
}

console.log(`Recursion ${sumToRecursion(4)}`); // 10
console.log(`Recursion ${sumToRecursion(100)}`); // 5050

// Using arithmetic progression formula.
function sumToArithmeticProgression(n) {
	return (n * (n + 1)) / 2;
}

console.log(`ArithmeticProgression ${sumToArithmeticProgression(4)}`); // 10
console.log(`ArithmeticProgression ${sumToArithmeticProgression(100)}`); // 5050
