import { Component } from 'react';

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
