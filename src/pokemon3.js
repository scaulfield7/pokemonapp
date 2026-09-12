import { Component } from 'react';

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
