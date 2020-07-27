import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import Header from '../../Componentes/Header';
import { Container, TypeContainer } from './Styles';
import logo from '../../Imagens/logo_pokemon.png'


function Home() {
      return (
        <Fragment>
          <Header />
          <Container>
            <TypeContainer>
            <img src={logo}></img>
            </TypeContainer>
          </Container>
        </Fragment>
      );
    }
  
  export default Home;