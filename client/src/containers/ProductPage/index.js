import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { collectionListTypes } from 'utils/types';

import CollectionItem from 'components/CollectionItem';

import './index.scss';

class ProductPage extends Component {
  render() {
    const { collectionList } = this.props;

    return (
      <div className="product-page">
        {
          collectionList.map((collection) => (
            <CollectionItem
              collection={collection}
              key={`collection-${collection.file_name}`}
            />
          ))
        }
      </div>
    );
  }
}

ProductPage.propTypes = {
  collectionList: PropTypes.arrayOf(collectionListTypes).isRequired,
};

const mapStateToProps = (state) => {
  return {
    collectionList: state.collectionList,
  };
};

export default connect(mapStateToProps)(ProductPage);
