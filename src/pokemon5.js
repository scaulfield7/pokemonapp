import React, { Component, Components } from 'react';
import pokeapi from './pokeapi';
import data from './data/data.json';
import { Redirect } from "react-router-dom";

let pokemonId = 5;
let name = "Charmeleon";
let type = "fire";
let moves = ["mega-punch", "fire-punch"];

class Pokemon5 extends Component {
  render() {
    return (
      "Pokémon " + pokemonId + " name: " + name + ", type: " + type + ", moves: " + moves
    )
  }
}

export default Pokemon5

