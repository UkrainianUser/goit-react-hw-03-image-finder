import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({webformatURL, largeImageURL, tags, openModal, toggleOnLoading,}) => {
  return (
    <li className={css['gallery__item']}>
      <img
        className={css['gallery__item-img']}
        src={webformatURL}
        data-large={largeImageURL}
        alt={tags}
        onClick={event => {
          openModal(event.target.dataset.large);
          toggleOnLoading();
        }}
      />
    </li>
  );
}

export default ImageGalleryItem;