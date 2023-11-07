// Count down from number recursively

function countDown(fromNumber) {
	console.log(fromNumber);

	const nextNumber = fromNumber - 1;

	if (nextNumber > 0) {
		countDown(nextNumber);
	}
}

countDown(10);
