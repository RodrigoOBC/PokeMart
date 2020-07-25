import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabela from './tabela';
import { createPortal } from 'react-dom';

class App extends Component {

  state = {
    pokemons: [
      {
        nome: 'ditto',
        preco: '9999',
        tipo: 'physical'
      },
      {
        nome: 'ditto',
        preco: '9999',
        tipo: 'physical'
      },
      {
        nome: 'ditto',
        preco: '9999',
        tipo: 'physical'
      },
      {
        nome: 'ditto',
        preco: '9999',
        tipo: 'physical'
      }],

  };

  render(){
    return(
      <div className = "App" >
        <Tabela pokemon={this.state.pokemons} />
      </div>
    );

  }

  
}

export default App;
