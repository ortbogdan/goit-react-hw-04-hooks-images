
// import React, { Component } from "react";
import { useState } from "react";
import { Container } from "./App.styled";
import { Searchbar, ImageGallery, Button, Loader, Modal } from './components/index'
import { Api } from "./services/api";
import * as Scroll from 'react-scroll';
import { useEffect } from "react/cjs/react.development";


export const App = () => {
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalImg, setTotalImg] = useState(0);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  
  // useEffect(() => {
  //   if (filter === '') {
  //     return
  //   }
  // }, [])
  useEffect(() => {
    if (filter === '') {
      return
    }
    const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
    const { hits, total, totalHits } = await Api(filter, page);
      
    if (total) {
      setImages([...images, ...hits]);
      setTotalImg(totalHits);
      
      return 
    }
    setError(new Error(`Oops...No pictures on your request - ${filter}`));
  } catch (error) {
    this.setState({ error });
  } finally {
    setLoading(false)
    setTimeout(()=>{Scroll.animateScroll.scrollToBottom();}, 500)
    
      }
    }
    fetchImages()
  }, [page, filter]);
  
  const handleFormSabmit = (query) => {
    if (query === filter) {
      return;
    }
    setFilter(query);
    setPage(1);
    setTotalImg(0);
  }
  const toggleModal = () => {
    setShowModal(!showModal);
  }  
  
  
  
  const takeImageUrl = url => {
    setImageUrl(url)
    toggleModal()
  }
  return (
      <Container>
        <Searchbar onSubmitForm={handleFormSabmit} />
        {showModal && <Modal onClose={toggleModal}><img src={imageUrl} alt="" /></Modal>}
        {error && <p>{error.message}</p>}
        {images.length > 0 && <ImageGallery images={images} onModal={takeImageUrl}/>}
        {loading && <Loader/>}
        {totalImg !== images.length && <Button onClick={()=>setPage(page+1)}>Load more</Button>}
      </Container>);
}



// export class App extends Component {
//   state = {
//     images: [],
//     filter: '',
//     page: 1,
//     loading: false,
//     totalHits: 0, 
//     error: null, 
//     showModal: false,
//     imageUrl: ''
//   }
//   async componentDidUpdate(_, prevState) {
//     const { filter } = this.state;
//     if (prevState.filter !== filter) {
//       this.fetchImages();
//     }
//   }
// toggleModal = () => {
//     this.setState(({showModal}) => ({showModal: !showModal}))
// }  
// handleFormSabmit = (filter) => {
//     if (filter === this.state.filter) {
//       return;
//     }
//     this.setState({ filter, page: 1, images: [], totalHits: 0 });
//   }
// fetchImages = async () => {
//         const { images, page, filter } = this.state;
//   try {
//     this.setState({ loading: true, error: null })
//     const { hits, total, totalHits } = await Api(filter, page);
      
//     if (total) {
      
//       return this.setState({ images: [...images, ...hits], totalHits: totalHits, page: page + 1 });
//     }
//     this.setState({ error: new Error(`Oops...No pictures on your request - ${filter}`) });
//   } catch (error) {
//     this.setState({ error });
//   } finally {
//     this.setState({ loading: false })
//     setTimeout(()=>{Scroll.animateScroll.scrollToBottom();}, 500)
    
//   }
// }
//   takeImageUrl = url => {
//     this.setState({ imageUrl: url })
//     console.log(this.state.imageUrl)
//     this.toggleModal()
//   }
//   render() {
//     const { error, images, loading, totalHits, showModal, imageUrl } = this.state;
//     return (
//       <Container>
//         <Searchbar onSubmitForm={this.handleFormSabmit} />
//         {showModal && <Modal onClose={this.toggleModal}><img src={imageUrl} alt="" /></Modal>}
//         {error && <p>{error.message}</p>}
//         {images.length > 0 && <ImageGallery images={images} onModal={this.takeImageUrl}/>}
//         {loading && <Loader/>}
//         {totalHits !== images.length && <Button onClick={this.fetchImages}>Load more</Button>}
//       </Container>);}
 
// }


