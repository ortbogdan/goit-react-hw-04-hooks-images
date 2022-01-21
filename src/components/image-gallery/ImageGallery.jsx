import React from "react";
import { ImageGalleryItem } from "./components/image-gallery-item/ImageGalleryItem";

import { GalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onModal }) => {
    return <GalleryList className="gallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => <ImageGalleryItem key={id} tags={tags} imageUrl={webformatURL} onClick={()=>onModal(largeImageURL)}/>)}
            </GalleryList>
}
