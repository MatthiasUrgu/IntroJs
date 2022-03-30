const readlineSync = require("readline-sync");

let number = readlineSync.question('Can you give me your number please?');



for( i=number ; i<=100 ; i++)
{
	if(i%2===0){
	
	console.log(i/2);
	
	}
	else 
	{console.log(i*3);
	
	}
	
	
	
	
	
	}
