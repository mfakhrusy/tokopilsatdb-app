import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-container">
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        <div className="search-icon">
          <FontAwesomeIcon icon="search" />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
