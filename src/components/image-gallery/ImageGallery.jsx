import React from "react";
import { ImageGalleryItem } from "./components/image-gallery-item/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";
export const ImageGallery = ({images}) => {
return (<GalleryList className="gallery">
  {images.map(({id, webformatURL})=><ImageGalleryItem key={id} imageUrl={webformatURL} />)}
</GalleryList>)
    
}