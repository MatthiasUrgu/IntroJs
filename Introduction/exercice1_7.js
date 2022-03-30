const readlineSync = require("readline-sync");

let number = readlineSync.question('give me your shoes size please?');

let numberSecond = readlineSync.question('give your birth year please?');

console.log(((number*2)+5*20)/numberSecond+1766);


