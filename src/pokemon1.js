import React, { Component, Components } from 'react';
import pokeapi from './pokeapi';
import data from './data/data.json';
import { Redirect } from "react-router-dom";

let pokemonId = 1;
let name = "Bulbasaur";
let types = ["grass", "poison"];
let moves = ["razor-wind", "swords-dance"];

class Pokemon1 extends Component {
  render() {
    return (
      "Pokémon " + pokemonId + " name: " + name + ", types: " + types + ", moves: " + moves
    )
  }
}

export default Pokemon1

