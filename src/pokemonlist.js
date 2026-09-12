import { Component } from 'react';
import data from './data/data.json';

let url = "";
let pokemonId = "";
let name = "";

class PokemonList extends Component {
  render() {
    console.log("this.props");
    console.log(this.props);
    return (

      <div className="container">
      <div >
        <h1><a href="http://localhost:3000/pokemonlist">Pokémon List</a></h1>
        
        {data.results.map((postDetail, index)=>{
          url = postDetail.url;
          name = postDetail.name;
          pokemonId = url.substr(34).slice(0, -1);

          return <h4><a href={'pokemonlist/pokemon/'+pokemonId}>{postDetail.name}</a></h4>
        })}
      </div>
      </div>
    )
  }
}

export default PokemonList
