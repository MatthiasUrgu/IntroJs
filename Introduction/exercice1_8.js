const readlineSync = require("readline-sync");

let userName = readlineSync.question('Can you give me your firstname please?');

let plat = readlineSync.question('Can you give me your favorite food please?');

let shoes = readlineSync.question('Can you give me your shoes size please?');
console.log("Hello " + userName);

 
console.log("Eh! " + userName  +" comment tu vas ? Hier, je sais que c'est toi qui a mangé le plat de " + plat +".  Oh et aufait j'ai acheter la paire de Jordan1 t as de la chance il avait plus que la pointure "+ shoes +" comme toi.Du coups je t en ai pris une.");

