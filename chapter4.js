const smallerThan = function(limit) {
	console.log(`limit: ${limit}`)
	return function subFunction(number) {
		console.log(`limit in sub function: ${limit}`)
		console.log(`number: ${number}`)
		return number < limit
	}
}
const smallerThan100 = smallerThan(100);

console.log(smallerThan100(15)); //true
console.log(smallerThan100(100)); //false

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function(num) {
	return num % 2 === 0;
});
console.log(evenNumbers)

const square = (x) => x * x;
console.log(square(5)); //25

const Human = firstName => this.firstName = firstName;
//const someHumanErr = new Human('Mirek'); // TypeError: Human is not a constructor
const someHuman = Human('Mirek');
console.log(someHuman.firstName); //undefined
console.log(this.firstName); // Mirek

const add = x => y => console.log(x + y);
const add10 = add(10);
add10(20);

(function () {
	const secretNumber = 42;
	function secretFunction() {
		console.log('This is a secret function.');
	}
	console.log('The secret number is: ' + secretNumber);
	secretFunction();
})();

setTimeout(function(){
	console.log("Powiadomienie po 2 sekundach!");
}, 2000);

/*let counter = 0;
setInterval(function(){
	counter++;
	console.log("Komunikat numer " + counter);
}, 1000);*/

let intervalId = setInterval(function() {
	console.log("Ta funkcja będzie wykonywana co 1 sekundę!");
}, 1000);

setTimeout(function() {
	clearInterval(intervalId);
	console.log("Funkcja setInterval została zatrzymana!");
}, 5000);
