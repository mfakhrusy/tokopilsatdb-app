import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import * as COLLECTION_ACT from 'actions/collection';

import InsertImageWidget from 'components/InsertImageWidget';
import InsertTextWidget from 'components/InsertTextWidget';
import ModalInfo from 'components/ModalInfo';

import { formCollectionTypes } from 'utils/types/collection';

import './index.scss';

class InsertCollection extends Component {
  uploadFormCollection = () => {
    const {
      formCollection,
      uploadFormCollection,
    } = this.props;

    uploadFormCollection(formCollection);
  }
  
  render() {
    const {
      formCollection,
      setFormCollectionLabel,
      setFormCollectionMedia,
    } = this.props;

    return (
      <div className="insert-collection-container">
        <div className="insert-collection">
          <header>
            <h2>Insert Your Collection</h2>
          </header>
          <section className="collection-thumbnail">
            <InsertImageWidget
              label="Collection"
              onSelectImage={setFormCollectionMedia}
            />
          </section>
          <section className="collection-name">
            <InsertTextWidget
              label="Collection Label"
              onInsertText={setFormCollectionLabel}
              type="collection_label"
            />
          </section>
          <footer>
            <Button
              onClick={this.uploadFormCollection}
              disabled={formCollection.media instanceof Blob !== true || isEmpty(formCollection.label)}
            >
              Save
            </Button>
          </footer>
        </div>
        <ModalInfo message={formCollection.message} />
      </div>
    );
  }
}

InsertCollection.propTypes = {
  uploadFormCollection: PropTypes.func.isRequired,
  setFormCollectionMedia: PropTypes.func.isRequired,
  setFormCollectionLabel: PropTypes.func.isRequired,
  formCollection: formCollectionTypes.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formCollection: state.collection.formCollection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFormCollection: (formData) => dispatch(COLLECTION_ACT.uploadFormCollection(formData)),
    setFormCollectionMedia: (media) => dispatch(COLLECTION_ACT.setFormCollectionMedia(media)),
    setFormCollectionLabel: (label) => dispatch(COLLECTION_ACT.setFormCollectionLabel(label)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertCollection);
