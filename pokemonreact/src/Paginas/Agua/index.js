import React from 'react';
import { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import { Container, TypeContainer } from './Styles';
import Header_agua from '../../Componentes/Header_agua';
import api from '../../Componentes/API'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CARDS from '../../Componentes/cards_pokemon'



class Agua extends Component {

  state = {

    pokemons: [],
    pokemonslink: [],
    pokemonsnome: [],
    pokemonsfoto: [],
    pokemonsinfo: [],
    pokemons_lista_info: []

  }



  async componentDidMount() {
    const response = await api.get('https://pokeapi.co/api/v2/type/11/')
    this.setState({ pokemons: response.data.pokemon })
    this.setState({
      pokemonsnome: this.state.pokemons.map(function (item, indice) {
        return item.pokemon.name;
      })
    })
    this.setState({
      pokemonslink: this.state.pokemons.map(function (item, indice) {
        return item.pokemon.url;
      })
    })

    var lista_pokemon = []

    for (var i = 0; i < this.state.pokemonslink.length; i++) {
      var response2 = await api.get(this.state.pokemonslink[i])
      lista_pokemon.push(response2)
    }

    this.setState({ pokemonsinfo: lista_pokemon })

    this.setState({
      pokemonsfoto: this.state.pokemonsinfo.map(function (item, indice) {
        return item.data.sprites.back_default;
      })
    })

    var pokemons_lista = [];
    var pokemnos_json = {} ;

    for (var i = 0; i < this.state.pokemonslink.length; i++) {
      
      
      pokemnos_json = {'nome': this.state.pokemonsnome[i], 'foto': this.state.pokemonsfoto[i]}
      pokemons_lista.push(pokemnos_json)
    }
    this.setState({pokemons_lista_info: pokemons_lista})

  }



  render() {
    const { pokemonsnome } = this.state
    const { pokemonsfoto } = this.state
    const {pokemons_lista_info} = this.state
    return (


      <Fragment>
        <Header_agua />
        <Container>
            <CARDS pokemon_todos={pokemons_lista_info} />
        </Container>
      </Fragment>
    );
  }
}

export default Agua;