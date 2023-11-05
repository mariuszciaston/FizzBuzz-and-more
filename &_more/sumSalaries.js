/* eslint-disable no-restricted-syntax */

const company = {
	sales: [
		{
			name: 'John',
			salary: 1000,
		},
		{
			name: 'Alice',
			salary: 1600,
		},
	],

	development: {
		sites: [
			{
				name: 'Peter',
				salary: 2000,
			},
			{
				name: 'Alex',
				salary: 1800,
			},
		],

		internals: [
			{
				name: 'Jack',
				salary: 1300,
			},
		],
	},
};

function sumSalaries(department) {
	if (Array.isArray(department)) {
		return department.reduce((accumulator, currentValue) => accumulator + currentValue.salary, 0); // sum the array
	}

	let sum = 0;
	for (const subdep of Object.values(department)) {
		sum += sumSalaries(subdep);
	}
	return sum;
}


console.log(sumSalaries(company)); // 7700
