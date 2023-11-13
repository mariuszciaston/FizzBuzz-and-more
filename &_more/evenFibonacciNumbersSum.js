// Iterative
function fibonacciIterativeSumOfEven(n) {
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	let next;
	let first = 0;
	let second = 1;
	const array = [];

	for (let i = 1; i < n; i += 1) {
		next = first + second;
		first = second;
		second = next;
		array.push(next);
	}

	console.log(array);

	const arrayOfEven = [];
	array.forEach((element) => {
		if (element % 2 === 0) {
			arrayOfEven.push(element);
		}
	});

	let sum = 0;
	console.log(arrayOfEven);

	arrayOfEven.forEach((element) => {
		sum += element;
	});

	console.log(sum);

	return sum;
}

console.log(fibonacciIterativeSumOfEven(33)); // 4613732

// ---------------------------------------------------------------

// Recursive
function fibonacciRecursiveSumOfEven(n, a = 0, b = 1, sum = 0) {
	if (n === 0) {
		return sum;
	}
	const next = a + b;
	if (next % 2 === 0) {
		sum += next;
	}
	return fibonacciRecursiveSumOfEven(n - 1, b, next, sum);
}

console.log(fibonacciRecursiveSumOfEven(33)); // 4613732
