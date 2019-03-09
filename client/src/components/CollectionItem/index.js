import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class CollectionItem extends Component {
  render() {
    const {
      imgSrc,
      alt,
      label,
      collection,
    } = this.props;

    return (
      <div className="collection-item">
        <div className="img-container">
          <img src={collection.image_url} alt={collection.alt} />
        </div>
        <div className="label">
          <span>{collection.label}</span>
          &nbsp;
          <span>{`(${collection.items_count})`}</span>
        </div>
      </div>
    );
  }
}

CollectionItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  collection: PropTypes.object.isRequired,
};

export default CollectionItem;
