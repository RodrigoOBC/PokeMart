import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from '../Componentes/Header';
import { Container, TypeContainer } from './Styles';
import logo from '../Imagens/logo_pokemon.png'
import agua from './Loja_agua'



class App extends Component {


    render() {
      return (
        <Fragment>
          <Header />
          <Container>
            <TypeContainer bgcolor="#00FFFF">
            <img src={logo}></img>
            </TypeContainer>
          </Container>
        </Fragment>
      );
    }
  }
  
  export default App;