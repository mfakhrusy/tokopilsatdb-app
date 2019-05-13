import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as COLLECTION_ACT from 'actions/collection';

class CollectionDetailPage extends Component {
  static propTypes = {
    collectionDetail: PropTypes.object.isRequired,
    getCollectionDetail: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    const { match, getCollectionDetail } = this.props;

    getCollectionDetail(match.params.collectionId);
  }

  render() {
    return (
      <div>
        collectiion deetail
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collectionDetail: state.collectionDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCollectionDetail: (collectionId) => dispatch(COLLECTION_ACT.getCollectionDetail(collectionId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionDetailPage));
