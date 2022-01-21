import React from "react";
import { GalleryItem } from "./ImageGalleyItem.styled";
export const ImageGalleryItem = ({imageUrl, tags, onClick}) => {
    return (<GalleryItem className="gallery-item">
      <img src={imageUrl} alt={tags} onClick={() => onClick() }/>
</GalleryItem>)

}