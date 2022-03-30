const readlineSync = require("readline-sync");

let number = readlineSync.question('enter the min or max number of this Array : ');

let arr = [1,2,3,4,5];

if(number==1){
	var Min = Math.min(...arr);
	console.log(Min);
		}
		
	else if(number == 5){

		var Max = Math.max(...arr);
			console.log(Max);

			}
			
	else if( 1 > number < 5 ){
	
		console.log("Retry again poor illiterate");
		
		}
