`use strict`;

// USER CAN DRINK FUNCTION
let user = {
	name: `Josh`,
	age: 23,
	country: `Vietnam`,
	Nationality: `American`,
	Gender: ` male`,
};

function canDrink(age) {
	if (user.age >= 21) {
		console.log(`${user.name} can drink`);
	} else if (user.age < 21 && user.country != `USA`) {
		console.log(
			`Under age in the United States, but can drink in ${user.country}`
		);
	} else {
		console.log(`${user.name} can not drink`);
	}
}

canDrink(user.age);
//
//
// DOG AGE FUNCTION

function calculateDogAge(age) {
	let dogAge = age * 7;
	console.log(`Your dogs age is ${dogAge}`);
}
calculateDogAge(2);
calculateDogAge(10);
calculateDogAge(6);

//
//
// FORTUNE TELLER
function tellFortune(numberOfChildren, partnersName, location, jobTitle) {
	console.log(
		`You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberOfChildren} children`
	);
}

tellFortune(2, `Josh`, `Vietnam`, `Software Engineer`);
//
//
//
// LIFETIME SUPPLY CALCULATOR FUNCTION
function calculateSupply(age, amtPerDay) {
	let maxAge = 90;
	let amount = amtPerDay * 365 * maxAge;
	let minusAge = amtPerDay * 365 * age;
	console.log(
		`You will need ${
			amount - minusAge
		} to last you until the ripe old age of ${maxAge}`
	);
}
calculateSupply(23, 2);
calculateSupply(45, 8);
calculateSupply(12, 3);
//
//
//
// geometrizer function
function calcCircumfrence(radius) {
	let circumfrence = 3.1415 * radius ** 2;
	console.log(`The circumfrence of the circle is ${circumfrence}`);
}

calcCircumfrence(10);
//
//
//
// THE TEMPERATURE CONVERTER

function celsiusToFahrenheit(celsius) {
	var celsiusInF = (celsius * 9) / 5 + 32;
	console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
	var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
	console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}
celsiusToFahrenheit(32);
fahrenheitToCelsius(50);
fahrenheitToCelsius(100);
celsiusToFahrenheit(14);
