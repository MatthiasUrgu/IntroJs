const readlineSync = require("readline-sync");

let age = readlineSync.question('Can you give me your age please?');

if  (age >= 18){

	console.log("You're an adult");
	
	}
else {
	console.log("Your're not yet kids");
	}
