import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';

import './index.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-placeholder" />
        <div className="header-logo">
          <Logo />
        </div>
        <div className="header-searchbar">
          <SearchBar />
        </div>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
