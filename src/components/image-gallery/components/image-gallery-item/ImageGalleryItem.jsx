import React from "react";
import { GalleryItem } from "./ImageGalleyItem.styled";
export const ImageGalleryItem = ({imageUrl, tags}) => {
    return (<GalleryItem className="gallery-item">
  <img src={imageUrl} alt={tags} />
</GalleryItem>)

}