const randomNumber = (() => Math.floor(Math.random() * 100) + 1)();
console.log(`Ukryta liczba do zgadnięcia: ${randomNumber}`);

let guess = prompt('Zgadnij liczbę z zakresu 1-100');
guess = parseInt(guess);

	while (guess !== randomNumber) {
		if (guess < randomNumber) {
			guess = prompt(`Za mała liczba, podaj większą`);
		} else if (guess > randomNumber) {
			guess = prompt(`Za duża liczba, podaj mniejszą`);
		}
		guess = parseInt(guess);
	}

	if (guess === randomNumber) {
		alert(`Udało się, zgadłeś! Ukryta liczba to: ${randomNumber}`);
	}