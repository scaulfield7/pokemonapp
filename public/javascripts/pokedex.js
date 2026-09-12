// Pokedex API setup
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
let pokemonList = [];
let currentPokemon;
let totalNumberOfPokemon = 151;

for (let i = 1; i <= totalNumberOfPokemon; i++) {
  P.getPokemonByName(i, function (response, error) { // with callback
    if (!error) {
      currentPokemon = response.forms[0].name;
      pokemonList.push(currentPokemon);
    } else {
      console.log(error)
    }
  });
}

P.getPokemonByName(1) // with Promise
  .then(function (response) {
    console.log("Original: " + response.forms[0].name);
  })
  .catch(function (error) {
    console.log('There was an ERROR: ', error);
  });
