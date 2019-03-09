import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import CollectionTable from 'components/CollectionTable';

import './index.scss';

class Collections extends Component {
  render() {
    return (
      <div className="collection-page">
        <header>
          <h2>
            Collection
          </h2>
        </header>
        <CollectionTable />
      </div>
    );
  }
}

Collections.propTypes = {
};

export default Collections;
