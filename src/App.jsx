
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
    page: 1
}
  async componentDidUpdate(_, prevState) {
    if (prevState.filter !== this.state.filter) {
      const response = await axios.get(`/api/?q=${this.state.filter}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({images: response.data.hits})
    }
  
}
  
  
async componentDidMount() {
    try {
      const response = await axios.get(`/api/?q=${this.state.filter}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({images: response.data.hits})
      console.log(response.data.hits)
    } catch (error) {
      console.log(error)
    }
  
  }
  handleSabmit = (event) => {
    event.preventDefault();
    const searchKey = event.currentTarget.elements.filter.value;
    const normalizeSearchKey = searchKey.trim()
    this.setState({ filter: normalizeSearchKey });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSabmit} />
        <ImageGallery images={this.state.images}></ImageGallery>
      </>);}
 
}


