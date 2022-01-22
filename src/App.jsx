
import React, { Component } from "react";
import { Container } from "./App.styled";
import { Searchbar, ImageGallery, Button, Loader, Modal } from './components/index'
import { Api } from "./services/api";
import * as Scroll from 'react-scroll';

export class App extends Component {
  state = {
    images: [],
    filter: '',
    page: 1,
    loading: false,
    totalHits: 0, 
    error: null, 
    showModal: false,
    imageUrl: ''
  }
  async componentDidUpdate(_, prevState) {
    const { filter } = this.state;
    if (prevState.filter !== filter) {
      this.fetchImages();
    }
   Scroll.animateScroll.scrollToBottom({spyThrottle: 500, smooth: 'easeInOutQuint'});

  }
toggleModal = () => {
    this.setState(({showModal}) => ({showModal: !showModal}))
}  
handleFormSabmit = (filter) => {
    if (filter === this.state.filter) {
      return;
    }
    this.setState({ filter, page: 1, images: [], totalHits: 0 });
  }
fetchImages = async () => {
        const { images, page, filter } = this.state;
  try {
    this.setState({ loading: true, error: null })
    const { hits, total, totalHits } = await Api(filter, page);
      
    if (total) {
      
      return this.setState({ images: [...images, ...hits], totalHits: totalHits, page: page + 1 });
    }
    this.setState({ error: new Error(`Oops...No pictures on your request - ${filter}`) });
  } catch (error) {
    this.setState({ error });
  } finally {
    
    this.setState({ loading: false })
  }
}
  takeImageUrl = url => {
    this.setState({ imageUrl: url })
    console.log(this.state.imageUrl)
    this.toggleModal()
  }
  render() {
    const { error, images, loading, totalHits, showModal, imageUrl } = this.state;
    return (
      <Container>
        <Searchbar onSubmitForm={this.handleFormSabmit} />
        {showModal && <Modal onClose={this.toggleModal}><img src={imageUrl} alt="" /></Modal>}
        {error && <p>{error.message}</p>}
        {images.length > 0 && <ImageGallery images={images} onModal={this.takeImageUrl}/>}
        {loading && <Loader/>}
        {totalHits !== images.length && <Button onClick={this.fetchImages}>Load more</Button>}
      </Container>);}
 
}


