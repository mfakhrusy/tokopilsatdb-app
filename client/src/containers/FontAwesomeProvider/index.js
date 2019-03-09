import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch,
);

class FontAwesomeProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

FontAwesomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FontAwesomeProvider;
