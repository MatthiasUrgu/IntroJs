const readlineSync = require("readline-sync");



let Tvseries = readlineSync.question(' tvSeries ? : ');
let Year = readlineSync.question('Year of production : ');
let Cast = readlineSync.question('Name of the cast : ');


let  askTvSerie ={
	
	Tvseries: Tvseries,
	Cast: Cast,
	Year: Year
}


fetch("exercice5_1.json")
	.then(res=> res.json())
	.then(data=> console.log(JSON.stringify(data)))
