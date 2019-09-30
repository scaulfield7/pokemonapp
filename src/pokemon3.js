import React, { Component, Components } from 'react';
import pokeapi from './pokeapi';
import data from './data/data.json';
import { Redirect } from "react-router-dom";

let pokemonId = 3;
let name = "Venusaur";
let types = ["grass", "poison"];
let moves = ["swords-dance", "cut"];

class Pokemon3 extends Component {
  render() {
    return (
      "Pokémon " + pokemonId + " name: " + name + ", types: " + types + ", moves: " + moves
    )
  }
}

export default Pokemon3

