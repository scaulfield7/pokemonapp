// Pokedex API setup

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
let pokemonList = [];
//let pokemonListUpdated = [];
let currentPokemon;
let totalNumberOfPokemon = 11;
//let innerList = [];


//for (let i = 1; i <= 11; i++) {


//function getPokemonByName(handler) {
//  setTimeout(handler, 0)
//}

function f2(thingFromForLoop) {
 console.log("List from f2 function: ", thingFromForLoop);
}


for (let i = 1; i <= totalNumberOfPokemon; i++) {


//}


	//P.getPokemonByName(i);

	  P.getPokemonByName(i, function(response, error) { // with callback
      if(!error) {
        console.log("i = " + i);
        currentPokemon = response.forms[0].name;
        console.log("Name: " + currentPokemon);
        pokemonList.push(currentPokemon);
        
        //pokemonListUpdated.push(currentPokemon);
        f2(pokemonList);
        //if(i === totalNumberOfPokemon){
        //	console.log("List: " + pokemonList);
        //}
        //pokemonListUpdated = pokemonList.map(P.getPokemonByName(i));
      } else {
        console.log(error)
      }
      console.log("List within loop: " + pokemonList);
    });

} // end for loop
console.log("Outside for loop...");
console.log(pokemonList);


 P.getPokemonByName(1) // with Promise
    .then(function(response) {
    	console.log("Original: " + response.forms[0].name);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
/*
 P.getPokemonByName(1) // with Promise
    .then(function(response) {
    	console.log(response.forms[0].name);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

for (let i = 1; i <= 2; i++) {
	P.getPokemonByName(2)
		.then(function(response)) {
			pokemonList.push([response.forms[0].name]);
		}
		.catch(function(error) {
      	console.log('There was an ERROR: ', error);
    	});

console.log(pokemonList);

*/

/*
 P.getPokemonByName(1) // with Promise
    .then(function(response) {
    	console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
 */

/*
for (let i = 1; i <= 11; i++) {
 P.getPokemonByName(i) // with Promise
    .then(function(response) {
    	pokemonList.push(response.forms[0].name);
    	console.log(pokemonList[i]);
        //console.log(pokemonList);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
}
*/


/*
console.log(pokemonList[1]);
console.log(pokemonList[2]);
console.log(pokemonList[3]);
console.log(pokemonList[4]);
console.log(pokemonList[5]);
*/

//console.log(...pokemonList);

//for (let i = Things.length - 1; i >= 0; i--) {
//	Things[i]


//}