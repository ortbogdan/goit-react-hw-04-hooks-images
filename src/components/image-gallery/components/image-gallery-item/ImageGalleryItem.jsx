import React from "react";
import PropTypes from 'prop-types'
import { GalleryItem } from "./ImageGalleyItem.styled";
export const ImageGalleryItem = ({imageUrl, tags, onClick}) => {
    return (<GalleryItem className="gallery-item">
      <img src={imageUrl} alt={tags} onClick={() => onClick() }/>
</GalleryItem>)
}
ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
}