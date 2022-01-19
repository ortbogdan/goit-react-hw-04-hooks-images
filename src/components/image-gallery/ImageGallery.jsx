import React from "react";
import { ImageGalleryItem } from "./components/image-gallery-item/ImageGalleryItem";
export const ImageGallery = ({images}) => {
return (<ul className="gallery">
  {images.map(({id, webformatURL})=><ImageGalleryItem key={id} imageUrl={webformatURL} />)}
</ul>)
    
}