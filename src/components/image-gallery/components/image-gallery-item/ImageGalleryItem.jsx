import React from "react";

export const ImageGalleryItem = ({imageUrl, tags}) => {
    return (<li className="gallery-item">
  <img src={imageUrl} alt={tags} />
</li>)

}