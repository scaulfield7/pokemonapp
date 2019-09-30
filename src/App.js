import React, { Component } from 'react';
// import logo from './logo.svg';
//import logo from 'pokédex_logo.svg;
// Importing Bootstrap elements
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import Pokemon from './pokemon';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import PageNotFound from "./pagenotfound";
import './App.css';
import ReactDOM from 'react-dom'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
//library.add(fab, faCheckSquare, faCoffee)

//import Test from './test';

/*
const NoMatch = ({ location }) => (
  <div>
      <div className="container" class ="text-center">
  <br />
    <h2>Uh oh! That wasn't very effective...</h2>
      <div class="row">
        <div class="col 4">

        </div>
        <div class="col 4">
      <img class="img-responsive" src="images/psyduck_page_not_found.jpg" />
        </div>
        <div class="col 4">
        
        </div>
      </div>
    <h4><code>localhost:3000{location.pathname}</code> was not found.</h4>
    <h5><a href="http://localhost:3000">Click here</a> to return to the home page.</h5>
  </div>
  </div>
)
*/

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
      <Nav.Link href="/pokemon">Pokemon</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>




  <Route exact path='/' component={Home} />
  <Route path='/contact' component={Contact} />
  <Route path='/pokemon' component={Pokemon} />
  <Route path="/pokemon2/:id" render={
    props => <Pokemon {
      ...props
    } />
  } />
   <Route path="/pokemon/:id" component={Pokemon} />


  <Route exact path="/404" component={PageNotFound} />

  <footer class ="text-center align-bottom">
    <br />
    <br />
    <br />
      A project by <a href="https://github.com/sarahcaulfield/">Sarah Caulfield</a>
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
