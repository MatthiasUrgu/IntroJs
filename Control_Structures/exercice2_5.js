const readlineSync = require("readline-sync");

let number = readlineSync.question('Can you give me your number please?');

while(number != 42) {

	console.log (readlineSync.question('Can you give me your number please?'));
	
	
if(number == 42)
	{
	break;
	}
	
	}
	
