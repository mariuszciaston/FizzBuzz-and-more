
// The function return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicateRecursively(times, number) {
	if (times <= 0) return [];

	return [number].concat(replicateRecursively(times - 1, number));
}

console.log(replicateRecursively(3, 5)); // [5, 5, 5]
console.log(replicateRecursively(1, 69)); // [69]
console.log(replicateRecursively(-2, 6)); // []




function replicateIteratively(times, number) {
	let arr = [];

	if (times <= 0) {
		arr = [];
	} else {
		for (let i = 0; i < times; i += 1) arr.push(number);
	}
	return arr;
}



console.log(replicateIteratively(3, 5)); // [5, 5, 5]
console.log(replicateIteratively(1, 69)); // [69]
console.log(replicateIteratively(-2, 6)); // []


