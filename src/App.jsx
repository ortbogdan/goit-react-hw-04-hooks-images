
import React, { Component } from "react";
import axios from "axios";
import { Searchbar } from "./components/searchbar/Searchbar";
import "../src/styles.css";
export class App extends Component {
  state = {
    images: [],
    filter: ''
}

async componentDidMount() {
    try {
      const response = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=24332331-fceed411956b076254def86c5&image_type=photo&orientation=horizontal&per_page=12');
      this.setState({images: response.data.hits})
      
    } catch (error) {
      console.log(error)
    }
  
  }
  handleSabmit = (event) => {
    event.preventDefault();
    const searchKey = event.currentTarget.elements.filter.value;
    const normalizeSearchKey = searchKey.trim()
    // console.log(this.state.images)
    // console.log(event.currentTarget.elements.filter.value)
    this.setState({ filter: normalizeSearchKey });
  }

  render() {
    return (
      <>
    <Searchbar onSubmit={this.handleSabmit}></Searchbar>
      </>);}
 
}


