import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBars,
  faHome,
  faAngleLeft,
  faStoreAlt,
  faShoppingCart,
  faDolly,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(
  faSearch,
  faBars,
  faHome,
  faEnvelope,
  faAngleLeft,
  faStoreAlt,
  faShoppingCart,
  faDolly,
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