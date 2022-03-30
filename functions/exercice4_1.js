const readlineSync = require("readline-sync");

let a = readlineSync.question('give me the length : ');
let b = readlineSync.question('give me the width : ');
let x = calcSurface();

function calcSurface(){

 return a * b
 

}
console.log(x);

