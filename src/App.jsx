
import React, { Component } from "react";
import { Container } from "./App.styled";
import {Searchbar, ImageGallery, Button} from './components/index'
import axios from "axios";
const API_KEY = '24332331-fceed411956b076254def86c5';
axios.defaults.baseURL = 'https://pixabay.com';
export class App extends Component {
  state = {
    images: [],
    filter: '',
    page: 1,
    loading: false,
    totalHits: 0
}
async componentDidUpdate(_, prevState) {
        const { filter } = this.state;
        if (prevState.filter !== filter) {
            this.fetchImages();
        }
    }
handleFormSabmit = (filter) => {
    this.setState({ filter, images: [], page: 1 });
  }
fetchImages = async () => {
        const { images, page, filter } = this.state;
        try {   
                this.setState({ loading: true, error: null })
                const response = await axios.get(`/api/?q=${filter}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
                const {hits, total, totalHits} = response.data
                if (total) {
                  return this.setState({ images: [...images, ...hits], totalHits: totalHits, page: page+1 });
                }
                return this.setState({error: new Error(`Oops...No pictures on your request - ${filter}`)});
            } catch (error) {
                this.setState({error})
            } finally {
                this.setState({ loading: false })
            }
}
  render() {
    const { error, images, loading, totalHits } = this.state;
    return (
      <Container>
        <Searchbar onSubmitForm={this.handleFormSabmit} />
        {error && <h2>{error.message}</h2>}
        {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
        {loading && <h2>Download...</h2>}
        {totalHits !== images.length && <Button onClick={this.fetchImages}>Load more</Button>}
      </Container>);}
 
}


