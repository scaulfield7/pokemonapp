import React, { Component } from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    // Create the ref
    this.pokemonRef = React.createRef()
  }

  render() {
    return (
      <div>
      	<div ref={this.pokemonRef} />
        <input ref={this.pokemonRef} />
      </div>
    )
  }
}

export default Contact