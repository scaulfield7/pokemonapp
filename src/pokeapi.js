import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

  P.getPokemonByName(1, function(response, error) { // with callback
      if(!error) {
        console.log(response);
      } else {
        console.log(error)
      }
    });

export default P;
