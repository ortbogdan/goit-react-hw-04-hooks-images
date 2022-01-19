
import React, { Component } from "react";
import axios from "axios";
import {Searchbar, ImageGallery} from './components/index'
import "../src/styles.css";

const API_KEY = '24332331-fceed411956b076254def86c5';
axios.defaults.baseURL = 'https://pixabay.com';
export class App extends Component {
  state = {
    images: [],
    filter: 'cat',
    page: 1,
    loading: false,
}
async componentDidUpdate(_, prevState) {
    if (prevState.filter !== this.state.filter) {
      const response = await axios.get(`/api/?q=${this.state.filter}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({images: response.data.hits})
    }
  
}
  
  
  async componentDidMount() {
    this.setState({loading: true})
    try {
      const response = await axios.get(`/api/?q=${this.state.filter}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({images: response.data.hits})
      console.log(response.data.hits)
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({loading: false})
    }
  
  }
  handleFormSabmit = (searchedImg) => {
    this.setState({ filter: searchedImg });
  }

  render() {
    return (
      <>
        <Searchbar onSubmitForm={this.handleFormSabmit} />
        {this.state.loading && <h2>Download...</h2>}
        <ImageGallery images={this.state.images}></ImageGallery>
      </>);}
 
}


