import React, { Component, Components } from 'react';
import pokeapi from './pokeapi';
import data from './data/data.json';
//import { graphql } from "react-apollo";
//import { gql };

import { Redirect } from "react-router-dom";
//import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

let url = "";
let pokemonId = "";
let name = "";

/*
const Pokemon = ({ data }) => {
  if (!data) {
    return <Redirect to={{ pathname: "/404" }} />;
  }

  const { loading, getPokemon } = data;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loading && !getPokemon) {
    return <Redirect to={{ pathname: "/404" }} />;
  }

  return (
    <h1>
      {getPokemon.name}
    </h1>
  );
};


const pokemonQuery = gql`
  query($id: Int!) {
    getPokemon(id: $id) {
      id
      name
    }
  }
`;


export default graphql(pokemonQuery, {
  skip: props => !parseInt(props.match.params.id),
  options: props => ({
    variables: { id: props.match.params.id }
  })
})(Pokemon);
*/

let PokemonName;
let PokemonId;
let pokemonVariable;

const components = {
    name: PokemonName,
    id: PokemonId
};

//function Pm(props) {
    // Correct! JSX type can be a capitalized variable.
//    const SpecificPokemon = components[props.pokemonVariable];
//    return <SpecificPokemon pokemon={props.pokemon} />;
//}


class Pokemon extends Component {
  render() {
    console.log("this.props");
    console.log(this.props);
    return (


    //<BrowserRouter>
    //      <Switch>

      <div className="container">

      <div >
        <h1><a href="http://localhost:3000/pokemon">Pokémon</a></h1>
        

        {data.results.map((postDetail, index)=>{
          url = postDetail.url;
          name = postDetail.name;
          pokemonId = url.substr(34).slice(0, -1);
          //pokemonId = pokemonId.slice(0, -1);
          console.log("pokemonId: " + pokemonId);
          //anchorObject.href=url;
          console.log("url: " + url);
          //console.log(data.results.forms.name);
          console.log("name: " + name);
          //return <h4><a href={''+url}>{postDetail.name}</a></h4>
          //let x = 2;

          //let specificPokemon = Components[Pokemon + "Component"];
            //return React.createElement(specificPokemon, {});

          //Pm();

          return <h4><a href={'pokemon/'+pokemonId}>{postDetail.name}</a></h4>
          
        })}
      </div>
      </div>

      //<Route path="/pokemon/1" render="<p>Testing pokemon 1</p>" />

        //    </Switch>
    //</BrowserRouter>
    )
  }
}

export default Pokemon

