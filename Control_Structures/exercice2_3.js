const readlineSync = require("readline-sync");

let userName = readlineSync.question('Can you give me your number please?');


/* first method 
let i = userName;

while (i <= 100) {
  console.log(i);
  i ++;
}
			*/
			
/*Second method */

for( i=userName ; i<=50 ; i++)
{
	console.log(i);
	}
