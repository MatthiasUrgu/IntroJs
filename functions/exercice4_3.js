const readlineSync = require("readline-sync");

/* test ajouter tableau 

let arr = [];
let total = 3;

for (let i = 0; i < total; i++) {
  arr.push('a');
}

console.log(arr);*/



let n = readlineSync.question('how much : ');


function rand10(){

return Math.floor(Math.random() * 10);
}


function multiRand(zeubi){
	let array = [];
		
	for ( let i=0 ; i < zeubi ; i++ ){
	
	  array.push(rand10()) ;
	  
	 } 
	 return array;
}

console.log(multiRand(n));
