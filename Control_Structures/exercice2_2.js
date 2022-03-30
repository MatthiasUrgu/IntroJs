const readlineSync = require("readline-sync");

let min = readlineSync.question('Can you give a number please?');

let content = readlineSync.question('Can you give a number and remember it');

let max = readlineSync.question('Can you give a number please?');

if (min < content < max){

	console.log(content);
	}
	
	
else if (min > max){ console.log("Your're Number is not between min and max");
}
