
import React, { Component } from "react";
import { Container } from "./App.styled";
import {Searchbar, ImageGallery} from './components/index'

export class App extends Component {
  state = {
    filter: '',
}

  handleFormSabmit = (filter) => {
    this.setState({ filter });
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmitForm={this.handleFormSabmit} />
        <ImageGallery filter={this.state.filter}></ImageGallery>
      </Container>);}
 
}


