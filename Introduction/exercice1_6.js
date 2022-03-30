const readlineSync = require("readline-sync");

let number = readlineSync.question('give me an  integer number please?');

let numberSecond = readlineSync.question('give a second integer number please?');

console.log(Math.round(number));
console.log(Math.round(numberSecond));
console.log(number/numberSecond);
