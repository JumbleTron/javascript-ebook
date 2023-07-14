function Person(name, lastName, age) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.introduce = function() {
		console.log("Cześć, nazywam się " + this.name + " " + this.lastName + " i mam " + this.age + " lat.");
	}
}
const person = new Person('Jan', 'Kowalski', 21);

person.introduce();

const person1 = {
	name: 'Jan',
	lastName: 'Kowalski',
	age: 30,
	introduce: function () {
		console.log("Cześć, nazywam się " + this.name + " " + this.lastName + " i mam " + this.age + " lat.");
	}
}
person1.introduce();

const person2 = new Object()
person2.name = 'Michał';
person2.lastName = 'Kowalski';
person2.age = 18;
person2.introduce = function () {
	console.log("Cześć, nazywam się " + this.name + " " + this.lastName + " i mam " + this.age + " lat.");
}
person2.introduce();

const person3 = Object.create({})
person3.name = 'Monika';
person3.lastName = 'Kowalski';
person3.age = 20;
person3.introduce = function () {
	console.log("Cześć, nazywam się " + this.name + " " + this.lastName + " i mam " + this.age + " lat.");
}
person3.introduce();

function Persons(name, lastName, age) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
}
Persons.prototype.introduce = function() {
	console.log("Cześć, nazywam się " + this.name + " " + this.lastName + " i mam " + this.age + " lat.");
}
const person4 = new Persons('Krzyś', 'Uszaty', 5);
const adult = Object.create(Persons.prototype)
adult.age = 15;
adult.name = 'Jan';
adult.lastName = 'Kowalski';
adult. constructor.prototype.isAdult = function () {
	console.log(this.age >= 18 ? 'Tak' : 'Nie');
};
adult.introduce();
adult.isAdult();
person4.introduce();
//person.isAdult(); //TypeError: person.isAdult is not a function

function PersonGlobal(name) {
	this.firstName = name;
}
const person5 = PersonGlobal('Jan');
//console.log(person5.firstName); //TypeError: Cannot read properties of undefined (reading 'firstName')
console.log(global.firstName) //Jan
//console.log(window.firstName) //dostepne tylko w przegladarce

const personApply = {
	name: 'John',
	age: 30,
	introduce: function() {
		console.log("Cześć, nazywam się " + this.name + " i mam " + this.age + " lat.");
	}
};
personApply.introduce();
const personApply2 = {
	name: 'Alice',
	age: 25
};

personApply.introduce.apply(personApply2);

const personBind = {
	name: 'Jan',
	introduce: function() {
		console.log(`Cześć, nazywam się ${this.name}`);
	}
}
const newPersonBind = {
	name: 'Anna'
}
const introduceAnna = personBind.introduce.bind(newPersonBind);
introduceAnna(); // wypisze "Cześć, nazywam się Anna"

const personToClone1 = { name: "Krzyś" }
const personToClone2 = { name: "Jaś", prev: personToClone1 }
const clonedPersonToClone2 = Object.assign({}, personToClone2)
console.log(personToClone1.name) //Krzyś
console.log(personToClone2.name) //Jaś
console.log(personToClone2.prev.name) //Krzyś
console.log(clonedPersonToClone2.name) //Jaś
clonedPersonToClone2.name = "Daniel";
console.log(clonedPersonToClone2.name) //Daniel
console.log(personToClone1.name) //Krzyś
personToClone1.name = "Konrad";
console.log(clonedPersonToClone2.prev.name) //Konrad
console.log(personToClone1.name) //Konrad

const personFreeze = {
	name: 'John',
	age: 30
};
Object.freeze(personFreeze);
personFreeze.age = 40; // nie zadziała, obiekt jest zamrożony
console.log(personFreeze); // {name: 'John', age: 30}
console.log(Object.isFrozen(personFreeze)) //true

const personSealed = {
	name: "John",
	age: 30
};
Object.seal(personSealed);
personSealed.age = 40;
personSealed.sex = "male";
console.log(personSealed);
console.log(Object.isSealed(personSealed)) //true

const personExtensions = {
	name: "John",
	age: 30
};

Object.preventExtensions(personExtensions);

personExtensions.age = 40;
delete personExtensions.name


console.log(personExtensions); // { age: 40 }
console.log(Object.isExtensible(personExtensions)) //false

const user = {
	name: "Jan",
	age: 24,
	gender: 'male'
}
console.log("age" in user) //true
console.log(user.hasOwnProperty("name")) //true
console.log(user.name !== undefined) //true
console.log(user.name !== 'undefined') //true

const user2 = {
	name: "Jan",
	age: 24,
	gender: 'male'
}
console.log(Object.values(user2))
console.log(Object.entries(user2))

class Human {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	introduce() {
		console.log(`Cześć, mam na imię: ${this.name} i mam ${this.age} lat`)
	}
	isAdult() {
		return this.age >= 18 ? "Tak" : 'Nie'
	}
}
//const human = Human("Marek", 10); //TypeError: Class constructor Person cannot be invoked without 'new'

const human = new Human("Marek", 10);
human.introduce()
console.log(human.isAdult())

class Vehicle {
	constructor(name) {
		this.name = name
	}
	getName() {
		return this.name
	}
}

class Car extends Vehicle {
	setPower(power) {
		this.power = power
	}
}

const car = new Car('BMW');
car.setPower(150);
console.log(car.getName());
