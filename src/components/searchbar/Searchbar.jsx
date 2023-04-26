import React from 'react';

class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
