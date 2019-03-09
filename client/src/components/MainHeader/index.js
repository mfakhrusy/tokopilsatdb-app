import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Header from 'components/Header';
import NavigationBar from 'components/NavigationBar';

import './index.scss';

class MainHeader extends Component {
  render() {
    return (
      <header>
        <Header />
        <NavigationBar />
      </header>
    );
  }
}

MainHeader.propTypes = {

};

export default MainHeader;
