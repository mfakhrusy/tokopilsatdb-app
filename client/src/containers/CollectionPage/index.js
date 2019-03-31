import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as COLLECTION_ACT from 'actions/collection';

import { collectionListTypes } from 'utils/types';

import CollectionItem from 'components/CollectionItem';

import './index.scss';

class CollectionPage extends Component {
  componentDidMount() {
    const { getCollectionList } = this.props;

    getCollectionList();
  }

  render() {
    const { collectionList } = this.props;

    return (
      <div className="collection-page-container">
        <div className="collection-page">
          {
            collectionList.map((collection) => (
              <CollectionItem
                imgSrc={collection.image_url}
                alt={collection.file_name}
                label={collection.label}
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

CollectionPage.propTypes = { // eslint-disable-line
  getCollectionList: PropTypes.func.isRequired,
  collectionList: PropTypes.arrayOf(collectionListTypes).isRequired,
};

const mapStateToProps = (state) => {
  return {
    collectionList: state.collectionList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCollectionList: () => dispatch(COLLECTION_ACT.getCollectionList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
