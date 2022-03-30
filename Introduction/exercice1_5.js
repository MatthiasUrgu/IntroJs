const readlineSync = require("readline-sync");

let number = readlineSync.question('give me a number please?');

let numberSecond = readlineSync.question('give a second number please?');

console.log(Math.round(number));
console.log(Math.round(numberSecond));

