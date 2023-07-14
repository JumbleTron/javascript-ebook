let quotedString = 'some string';
let doubleQuotedString = "some string";
let backtick = `the same string as above`;
let multilineString = `Backtick text with  
multi line 
string`;
console.log(multilineString);
let backTickWithVariable = `Backtick text with value from other variable: ${quotedString}`;
console.log(backTickWithVariable);

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

function equal(x, y) {
	return Math.abs(x - y) < Number.EPSILON;
}
console.log(equal(0.2 + 0.1, 0.3)); // true

function equal(x, y, tolerance = Number.EPSILON) {
	return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true

let half = .5 // 0.5
let hexNumber = 0xff //15

console.log('abc'/4) //NaN
console.log(Number.isNaN('100')) //false
console.log(Number.isNaN('abc'/4)) //true

console.log(NaN == NaN) //false
console.log(NaN === NaN) //false
console.log(typeof NaN) //number

console.log('abc'+4) //abc4

let someBigInt = 1234567890123456789012345678901234567890n;
let someNumber = 15;
let otherNumber = '10';
console.log(someNumber + otherNumber) //1510
//console.log(someBigInt + someNumber) //Error

let isTrue = true;
let iFalse = false;
console.log(5 < 54); //true

console.log(Symbol('symbol1') === Symbol('symbol1')); //false
const otherEvent = Symbol.for('event1');

const userName = "Adam";

if (userName == "Adam") {
	console.log("Cześć");
}

const age = 12;
if (age < 3) {
	console.log("Gra odpowiednia dla wszystkich grup wiekowych");
} else if (age > 3 && age < 7) {
	console.log("Dopuszczalne są bardzo łagodne formy przemocy, nierealistyczne");
}
else if (age >= 7 && age < 12) {
		console.log("Może pojawić się przemoc lub odwołania do seksu, w łagodnej formie");
}
else if (age >= 12 && age < 16) {
	console.log("Może pojawić sie zażywanie używek, wulgarny język przemoc i sceny seksu są dosadne");
} else {
	console.log("Zabijanie bez oczywistego powodu, gloryfikacja zażywania narkotyków, sceny seksu realsityczne");
}

const no = 2;
switch (no) {
	case 1:
		console.log("Jeden");
		break;
	case 2:
		console.log("Dwa");
		break;
	default:
		console.log("Nieznany numer");
}

const sex = 'male';
const isMale = sex === 'male' // true
const someLargeInteger = 657474465453563636;
const isSafeInteger = someLargeInteger <= Number.MAX_SAFE_INTEGER ? true : false;

if (!false) {
	console.log('falsy values: null')
}
if (!null) {
	console.log('falsy values: null')
}
if (!NaN) {
	console.log('falsy values: NaN')
}
if (!undefined) {
	console.log('falsy values: undefined')
}
if (!'') {
	console.log('falsy values: empty string')
}
if (!0) {
	console.log('falsy values: 0')
}
if (!-0) {
	console.log('falsy values: -0')
}
if (!0n) {
	console.log('falsy values: 0n')
}

const text = "Lorem ipsum dolor sit amet";
const regex = /\s/g;
const newString = text.replace(regex, "-");
console.log(newString); // "Lorem-ipsum-dolor-sit-amet"

const text2 = "Lorem ipsum dolor JavaScript sit amet";
const regex2 = /JavaScript/g;
let match;
while (match = regex2.exec(text2)) {
	console.log(`Found at index ${match.index}`);
}

const email = "user@example.com";
const regex3 = /@[^\s@]+.[^\s@]+$/;
console.log(regex3.test(email)); // true
