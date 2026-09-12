// Importing Bootstrap elements
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Pokemon from './pokemon';
import PokemonList from './pokemonlist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import PageNotFound from "./pagenotfound";
import './App.css';
import Pokemon1 from './pokemon1';
import Pokemon2 from './pokemon2';
import Pokemon3 from './pokemon3';
import Pokemon4 from './pokemon4';
import Pokemon5 from './pokemon5';

let pokemonList = {PokemonList};

const Page = ({ match, loading}) => {
  if (loading) return <div>Loading...</div>;
  return <div>You're on the Pokémon page {match.params.id}</div>;
};
const SelectPage = () => <div>Select a Pokémon</div>;

function App() {
  return (
    <BrowserRouter>
      <Switch>
    <div className="App">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="http://localhost:3000">PokéApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/pokemonlist">Pokemon List</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  <Route exact path='/' component={Home} />
  <Route path='/pokemonlist' component={PokemonList} />
  <Route path='/pokemonlist/pokemon' component={Pokemon} />
  <Route path="/pokemon2/:id" render={
    props => <Pokemon {
      ...props
    } />
  } />
   <Route path="/pokemonlist/pokemon/:id" component={Pokemon} />
   <Route path="/pokemonlist/pokemon/1" component={Pokemon1} />
   <Route path="/pokemonlist/pokemon/2" component={Pokemon2} />
   <Route path="/pokemonlist/pokemon/3" component={Pokemon3} />
   <Route path="/pokemonlist/pokemon/4" component={Pokemon4} />
   <Route path="/pokemonlist/pokemon/5" component={Pokemon5} />
   <Route path="/pokemonlist/pokemon/6" component={Pokemon} />
   <Route path="/pokemonlist/pokemon/7" component={Pokemon} />
   <Route path="/pokemonlist/pokemon/8" component={Pokemon} />
   <Route path="/pokemonlist/pokemon/9" component={Pokemon} />
   <Route path="/pokemonlist/pokemon/10" component={Pokemon} />
  <Route exact path="/404" component={PageNotFound} />

  <footer class ="text-center align-bottom">
    <br />
    <br />
    <br />
      A project by <a target="blank" href="https://github.com/sarahcaulfield/">Sarah Caulfield</a>
    <br />
  </footer>

      <header className="App-header">

      </header>
    </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
