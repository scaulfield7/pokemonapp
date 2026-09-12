import { Component } from 'react';

let pokemonId = 4;
let name = "Charmander";
let type = "fire";
let moves = ["mega-punch", "fire-punch"];

class Pokemon4 extends Component {
  render() {
    return (
      "Pokémon " + pokemonId + " name: " + name + ", type: " + type + ", moves: " + moves
    )
  }
}

export default Pokemon4
