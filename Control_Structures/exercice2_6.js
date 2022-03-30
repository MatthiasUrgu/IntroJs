const readlineSync = require("readline-sync");




let number = readlineSync.question('Can you give me a number between 1 and 7 please?');



let arr= ['','Monday' , 'Tuesday ','Wednesday','Thursday','Friday ','Saturday','Sunday'];

console.log(number +" => "+arr[number]);
