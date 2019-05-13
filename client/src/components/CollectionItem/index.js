import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './index.scss';

class CollectionItem extends Component {
  handleClick = () => {
    const { collection, history, location } = this.props;

    history.push(`${location.pathname}/${collection.collection_id}`);
  }

  render() {
    const {
      collection,
    } = this.props;

    return (
      <div
        tabIndex="0"
        role="button"
        className="collection-item"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
      >
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
  collection: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(CollectionItem);
