import React from "react";
import { ImageGalleryItem } from "./components/image-gallery-item/ImageGalleryItem";

import { GalleryList } from "./ImageGallery.styled";

// import axios from "axios";
// const API_KEY = '24332331-fceed411956b076254def86c5';
// axios.defaults.baseURL = 'https://pixabay.com';
// export class ImageGallery extends Component {
//     state = {
//     images: [],
//     page: 1,
//     perPage: 12,
//     totalHits: 0,
//     loading: false,
//     error: null
// }
//     async componentDidUpdate(prevProps) {
//         const { filter } = this.props;
        
//         if (prevProps.filter !== filter) {
//             this.setState({images: []})
//             this.fetchImages();
//         }
//     }
//     async fetchImages() {
//         const { images, perPage, page } = this.state;
//         const { filter } = this.props;
//         try {
//                 this.setState({ loading: true, error: null })
//                 const response = await axios.get(`/api/?q=${filter}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
//                 console.log(response.data.hits)
//                 if (response.data.total) {
//                     return this.setState({ images: [...images, ...response.data.hits], totalHits: response.data.totalHits, page: page+1 });
//                 }
//                 return this.setState({error: new Error(`Oops...No pictures on your request - ${filter}`)});
//             } catch (error) {
//                 this.setState({error})
//             } finally {
//                 this.setState({ loading: false })
//             }
//     }
    
//     render() {
//         const { images, loading, error, totalHits } = this.state;
//         return (
//             <>
//                 {error && <h2>{error.message}</h2>}
//                 {images.length > 0 && <GalleryList className="gallery">
//                     {images.map(({ id, webformatURL }) => <ImageGalleryItem key={id} imageUrl={webformatURL} />)}
//                 </GalleryList>}
//                 {loading && <h2>Download...</h2>}
//                 {totalHits !== images.length && <Button onClick={()=>this.fetchImages()}>Load more</Button>}
//             </>)
        
//     }
// }

export const ImageGallery = ({ images }) => {
    return <GalleryList className="gallery">
            {images.map(({ id, webformatURL }) => <ImageGalleryItem key={id} imageUrl={webformatURL} />)}
            </GalleryList>
}
