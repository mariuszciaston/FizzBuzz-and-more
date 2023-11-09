// Check all values in an array

function all(array, numFunc) {
	for (let i = 0; i < array.length; i += 1) {
		if (!numFunc(array[i])) {
			return false;
		}
	}
	return true;
}

const allAreLessThanSeven = all([1, 2, 9], (num) => num < 7);

console.log(allAreLessThanSeven); // false
