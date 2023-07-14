console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
console.log(4);

const fetchData = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
};

fetchData('https://jsonplaceholder.typicode.com/posts')
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

const promises = [
	new Promise(resolve => setTimeout(resolve, 5000, 'first')),
	new Promise(resolve => setTimeout(resolve, 2000, 'second')),
	new Promise(resolve => setTimeout(resolve, 3000, 'third'))
];

Promise.race(promises)
	.then(result => console.log(result))
	.catch(error => console.log(error))

const promisesAll = [
	new Promise(resolve => setTimeout(resolve, 5000, 'first')),
	new Promise(resolve => setTimeout(resolve, 2000, 'second')),
	new Promise(resolve => setTimeout(resolve, 3000, 'third'))
];

Promise.all(promisesAll)
	.then(results => console.log(results))
	.catch(error => console.log(error));

(async function () {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/50');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
})();

function getData(callback) {
	setTimeout(() => {
		const result = 'Dane pobrane';
		callback(result);
	}, 1000);
}

async function getAsyncData() {
	const promise = new Promise(resolve => {
		getData(result => {
			resolve(result);
		});
	});
	const result = await promise;
	console.log(result);
}
getAsyncData();
