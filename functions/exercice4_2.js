const readlineSync = require("readline-sync");

//let number = readlineSync.question('Can you give me a number between 1 and 7 please?');

let x = rand10();
function rand10(){
return Math.floor(Math.random() * 10);
}


console.log(x);

