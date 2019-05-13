import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { collectionListTypes } from 'utils/types';

import CollectionItem from 'components/CollectionItem';

import './index.scss';

class CollectionPage extends Component {
  render() {
    const { collectionList } = this.props;

    return (
      <div className="collection-page-container">
        <div className="collection-page">
          {
            collectionList.map((collection) => (
              <CollectionItem
                collection={collection}
                key={`collection-${collection.file_name}`}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

CollectionPage.propTypes = {
  collectionList: PropTypes.arrayOf(collectionListTypes).isRequired,
};

const mapStateToProps = (state) => {
  return {
    collectionList: state.collectionList,
  };
};

export default connect(mapStateToProps)(CollectionPage);
