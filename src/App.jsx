

import { useState, useEffect} from "react";
import { Container } from "./App.styled";
import { Searchbar, ImageGallery, Button, Loader, Modal } from './components/index'
import { Api } from "./services/api";
import * as Scroll from 'react-scroll';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImg, setTotalImg] = useState(0);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      setImages((prevImages)=> [...prevImages, ...hits]);
      setTotalImg(totalHits);
      return;
    }
    setError(new Error(`Oops...No pictures on your request - ${filter}`));
  } catch (error) {
    setError( error );
  } finally {
    setLoading(false)
    setTimeout(()=>{Scroll.animateScroll.scrollToBottom();}, 700)
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
    setImages([]);
  }
  const toggleModal = () => {
    setShowModal(!showModal);
  }  
  const takeImageUrl = url => {
    setImageUrl(url)
    toggleModal()
  }
  return <Container>
        <Searchbar onSubmitForm={handleFormSabmit} />
        {showModal && <Modal onClose={toggleModal}><img src={imageUrl} alt="" /></Modal>}
        {error && <p>{error.message}</p>}
        {images.length > 0 && <ImageGallery images={images} onModal={takeImageUrl}/>}
        {loading && <Loader/>}
        {totalImg !== images.length && <Button onClick={()=>setPage(page+1)}>Load more</Button>}
      </Container>;
}





