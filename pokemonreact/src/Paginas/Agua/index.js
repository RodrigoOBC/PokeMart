import React from 'react';
import { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import { Container, TypeContainer } from './Styles';
import Header_agua from '../../Componentes/Header_agua';
import api from '../../Componentes/API'





class Agua extends Component {

  state = {

    pokemons: [],
    pokemonslink: [],
    pokemonsnome: [],
    pokemonsfoto: []

  }

  

async componentDidMount(){
  const response = await api.get('https://pokeapi.co/api/v2/type/11/')
  this.setState({ pokemons: response.data.pokemon })
  this.setState({ pokemonsnome: this.state.pokemons.map(function (item, indice) {
    return item.pokemon.name;
  }) })
  this.setState({ pokemonslink: this.state.pokemons.map(function (item, indice) {
    return item.pokemon.url;
  }) })

  const response2 = await this.state.pokemonslink.map(function(item){
    return api.get(item)
  })
  this.setState({ pokemonsfoto: response2.data })
}



render(){
  const {pokemonsnome} = this.state
  const {pokemonslink} = this.state
  const {pokemonsfoto} = this.state
  return (

    
    <Fragment>
      <Header_agua />
      <Container>
        {console.log(pokemonsnome)}  
        {console.log(pokemonslink)}  
        {console.log(pokemonsfoto)}  
      </Container>
    </Fragment>
  );
}}

export default Agua;