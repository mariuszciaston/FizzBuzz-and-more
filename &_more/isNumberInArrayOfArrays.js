const arr = [
	[3, 21, 17],
	[61, 79, 101, 120],
	[133, 149],
];

const isNumberInArrayOfArrays = (number, array) => {
	for (let i = 0; i < array.length; i += 1) {
		for (let j = 0; j < array[i].length; j += 1) {
			if (array[i][j] === number) {
				return true;
			}
		}
	}
	return false;
};

// const isNumberInArrayOfArrays = (number, array) => array.some(subArray => subArray.includes(number));

console.log(isNumberInArrayOfArrays(0, arr)); // false
console.log(isNumberInArrayOfArrays(21, arr)); // true
console.log(isNumberInArrayOfArrays(221, arr)); // false
