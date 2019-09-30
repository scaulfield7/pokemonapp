// Pokedex API setup

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
let pokemonList = [];
let currentPokemon;
let totalNumberOfPokemon = 151;

function f2(thingFromForLoop) {
 console.log("List from f2 function: ", thingFromForLoop);
}

for (let i = 1; i <= totalNumberOfPokemon; i++) {
	  P.getPokemonByName(i, function(response, error) { // with callback
      if(!error) {
        console.log("i = " + i);
        currentPokemon = response.forms[0].name;
        console.log("Name: " + currentPokemon);
        pokemonList.push(currentPokemon);
        f2(pokemonList);
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
