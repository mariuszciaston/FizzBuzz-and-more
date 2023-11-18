// Search JS object

const nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: 'foo2',
					},
				},
			},
		},
	},
};

function contains(obj, value) {
	// eslint-disable-next-line no-restricted-syntax, guard-for-in
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			return contains(obj[key], value);
		}

		if (obj[key] === value) {
			return true;
		}
	}
	return false;
}

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, 'foo'); // fals

console.log(hasIt);
console.log(doesntHaveIt);
