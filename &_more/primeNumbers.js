function isPrime(num) {
	for (let i = 2; i < num; i += 1) {
		if (num % i === 0) {
			return false;
		}
	}

	return num !== 1;
}

for (let i = 2; i <= 100; i += 1) {
	if (isPrime(i)) {
		console.log(i);
	}
}
