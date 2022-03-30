




//rien compris a cette exercice

const readlineSync = require("readline-sync");

let n = readlineSync.question('Can you give me a number please?');

let next = 0;
let sum = 0;


for (let i = 0; i < n; i++) {
	let b = readlineSync.question('Can you give me a NewNumber please?');
	sum= parseInt(b);
    next +=sum;
}
console.log(next);

