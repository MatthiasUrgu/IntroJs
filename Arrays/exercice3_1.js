const readlineSync = require("readline-sync");

//let number = readlineSync.question('Can you give me a number between 1 and 7 please?');

let arr = [1,2,3,4,5];
let err =[100,101,102];

var total= 0 ;
var add = 0 ;

for (i=0 ; i < arr.length; i++){
	total += arr[i];

}

for (i=0 ; i < err.length; i++){
	add += err[i];

}


console.log(total);
console.log(add);

