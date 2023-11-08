// Output a single-linked list

const linkedList = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

// Loop-based solution
function printListLoop(list) {
	const output = [];
	output.push(list.value);

	let current = list.next;

	while (current !== null) {
		output.push(current.value);
		current = current.next;
	}

	return output;
}

console.log(`printListLoop: ${printListLoop(linkedList)}`);

// Recursive solution
function printListRecursive(list, output = []) {
	output.push(list.value);

	if (list.next) {
		printListRecursive(list.next, output);
	}

	return output;
}

console.log(`printListRecursive: ${printListRecursive(linkedList)}`);

// --------------------------------------------

// Output a single-linked list in the reverse order

// Loop REVERSE
function printListLoopReverse(list) {
	const output = [];
	output.push(list.value);

	let current = list.next;

	while (current !== null) {
		output.push(current.value);
		current = current.next;
	}

	output.reverse();
	return output;
}

console.log(`printListLoopReverse: ${printListLoopReverse(linkedList)}`);

// Recursion Loop REVERSE
function printListRecursiveReverse(list, output = []) {
	output.push(list.value);

	if (list.next) {
		printListRecursive(list.next, output);
	}

	output.reverse();
	return output;
}

console.log(`printListRecursiveReverse: ${printListRecursiveReverse(linkedList)}`);
