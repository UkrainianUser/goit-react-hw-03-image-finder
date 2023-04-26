import React from 'react';

const ImageGalleryItem = ({id, webformatURL, largeImageURL}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" data-source={largeImageURL} />
    </li>
  )
};

export default ImageGalleryItem;