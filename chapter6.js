const tablica = [1, 2, 3, 4, 5];
const tablica2 = new Array(10); // tworzy tablicę o długości 10
const tablica2a = Array(10);
const tablica3 = Array.of(1, 5, 6);
const tablica4 = Array.from(tablica3);

const exampleArray = new Array(5);
if (exampleArray.length > 0) {
	console.log(exampleArray[0] + exampleArray[exampleArray.length - 1])
}

const tab = [1, 2, 3, 4, 5];
console.log(tab[0]); // wypisuje 1
tab[1] = 10; // ustawia drugi element na 10
console.log(tab); // wypisuje [1, 10, 3, 4, 5]

const typedArray = new Int32Array(1024);
console.log(typedArray)

const array = [1, 2, 5];
array.push(102);
console.log(array); //1,2,5,102

const arrayP = [1, 2, 5];
arrayP.pop();
console.log(arrayP); //1,2

const arrayS = [1, 2, 5];
arrayS.shift();
console.log(arrayS); //2,5

const arrayU = [1, 2, 5];
arrayU.unshift(102);
console.log(arrayU); //102,1,2,5

const arraySl = [1, 2, 5];
console.log(arraySl.slice(0, 2)); //1,2
console.log(arraySl); // 1,2,5

const arraySp = [1, 2, 5];
console.log(arraySp.splice(0, 2)); //1,2
console.log(arraySp); // 5

let tabToEmpty = [1,2,3,5,46,6];
tabToEmpty = [];
console.log(tabToEmpty);

tabToEmpty = [1,2,3,5,46,6];
tabToEmpty.splice(0, tabToEmpty.length);
console.log(tabToEmpty);

tabToEmpty = [1,2,3,5,46,6];
tabToEmpty.length = 0
console.log(tabToEmpty);

const arrayF = ['czesc', 'nowy', 'uczniu']
for (let i = 0; i < arrayF.length; i++) {
	console.log(`Indeks ${i}: ${arrayF[i]}`);
}

const arrayW = [];
let index = 0;
while (index < arrayW.length) {
	console.log(`while Indeks ${index}: ${arrayW[index]}`);
	index += 1;
}

const arrayDw = [];
const index2 = 0;
do {
	console.log(`do while Indeks ${index2}: ${arrayDw[index2]}`);
	index += 1;
} while (index < arrayDw.length)

const arr = [10, 20, 30];
for (const key in arr) {
	console.log(key);
}
// output: 1,2,3
for (const val of arr) {
	console.log(val);
}
// output: 10, 20, 30

const tabToSpread = [1, 2, 3];
const mergedTab = [...tabToSpread, 4, 5, 6];
console.log(mergedTab); // [1, 2, 3, 4, 5, 6]

function sumujArgs(...args) {
	return args.reduce((a, b) => a + b);
}
console.log(sumujArgs(1, 2, 3, 4, 5)); // 15

const arrayFe = ['czesc', 'nowy', 'uczniu']
arrayFe.forEach((val, index) => {
	console.log(`Indeks ${index}: ${val}`);
});

let arrayI = [1, 2, 3, 4];
let iterator = arrayI[Symbol.iterator]();
let next = iterator.next()
while (!next.done) {
	console.log(next.value)
	next = iterator.next();
}

const someText = 'Jestem fajny';
for (const val of someText) {
	console.log(val)
}
console.log(`Litera na pozycji 5: ${someText[5]}`);

function* generateNumbers() {
	let liczba = 1;
	while (true) {
		yield liczba++;
	}
}

const generator = generateNumbers();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

const someMap = new Map()
someMap.set('key-1', 1);
someMap.set('key-2', 2);
someMap.set(3, 30);
someMap.set(true, false);
console.log(someMap.size) //4

const someSet = new Set();
someSet.add(1);
someSet.add(2);
someSet.add(3);
someSet.add(1);
console.log(someSet.size) //?
