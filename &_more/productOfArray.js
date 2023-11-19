// Product (wynik mnożenia) of an array

function productOfArray(array) {
	if (array.length === 0) return 1;
	return array[0] * productOfArray(array.slice(1));
}

const six = productOfArray([1, 2, 3]); // 6
const sixty = productOfArray([1, 2, 3, 10]); // 60

console.log(six);
console.log(sixty);
