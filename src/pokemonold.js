import React, { Component } from 'react';


// Pokedex API setup

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
let pokemonList = [];
let totalNumberOfPokemon = 11;
let pokemon;
let currentPokemon;

const PokemonOld = () => {
	return (
		<div className="container">
			<h4 className="center">PokemonOld</h4>
			<p>
				Pokemon page
			</p>
			<p ref="pokemonListSection">

			</p>
		</div>
	)

/*
 P.getPokemonByName(1) // with Promise
    .then(function(response) {
   		pokemon = response.forms[0].name;
    	console.log(pokemon);
    	document.getElementById("pokemonListSection").innerHTML = pokemon;
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
*/

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
        document.getElementById("pokemonListSection").innerHTML = pokemonList;
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


} // end const Pokemon

export default PokemonOld