import React from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';


class ImageGallery extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '34311781-efd5fccfe1ca82ca08bcfd072';
    const {currentPage, searchQuery} = this.state;

    this.setState({isLoading: true});

    axios
      .get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${currentPage}&per_page=12`)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1
        }))
      })
      .catch(error => this.setState({error}))
      .finally(() => this.setState({isLoading: false}));
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null
    });
  };

  render() {
    const {images, isLoading, error} = this.state;

    return (
      <>
        {images.length > 0 && (
          <ul className="gallery">
            {images.map(({id, webformatURL, largeImageURL}) => (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </ul>
        )}

        {isLoading && <p>Loading...</p>}
      </>
    );
  }
}

export default ImageGallery;