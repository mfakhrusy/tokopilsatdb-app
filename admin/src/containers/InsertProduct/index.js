import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InsertImageWidget from 'components/InsertImageWidget';
import InsertTextWidget from 'components/InsertTextWidget';
import InsertSelectWidget from 'components/InsertSelectWidget';

import * as PRODUCT_ACT from 'actions/product';

import './index.scss';

class InsertProduct extends Component {
  handleSelectCollection = (selectedOption) => {
    const { setFormProductCollection } = this.props;

    setFormProductCollection(selectedOption.collection_id);
  }

  render() {
    const {
      setFormProductDescription,
      setFormProductMedia,
      setFormProductName,
      setFormProductPrice,
      collectionList,
    } = this.props;

    return (
      <div className="insert-product-container">
        <div className="insert-product">
          <header>
            <h2>Insert Your Product</h2>
          </header>
          <section className="product-thumbnail">
            <InsertImageWidget
              label="Product"
              onSelectImage={setFormProductMedia}
            />
          </section>
          <section className="product-Product">
            <InsertSelectWidget
              label="Product Product"
              options={collectionList.map((item) => ({ ...item, value: item.collection_id, label: item.label }))}
              onSelect={this.handleSelectCollection}
            />
          </section>
          <section className="product-name">
            <InsertTextWidget
              label="Product Name"
              onInsertText={setFormProductName}
            />
          </section>
          <section className="product-description">
            <InsertTextWidget
              multiline
              label="Product Description"
              onInsertText={setFormProductDescription}
            />
          </section>
          <section className="product-price">
            <InsertTextWidget
              label="Product Price"
              onInsertText={setFormProductPrice}
            />
          </section>
        </div>
      </div>
    );
  }
}

InsertProduct.propTypes = {
  setFormProductMedia: PropTypes.func.isRequired,
  setFormProductName: PropTypes.func.isRequired,
  setFormProductDescription: PropTypes.func.isRequired,
  setFormProductPrice: PropTypes.func.isRequired,
  setFormProductCollection: PropTypes.func.isRequired,
  collectionList: PropTypes.array.isRequired,
  // formProduct: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    // formProduct: state.product.formProduct,
    collectionList: state.collection.collectionList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormProductMedia: (media) => dispatch(PRODUCT_ACT.setFormProductMedia(media)),
    setFormProductName: (name) => dispatch(PRODUCT_ACT.setFormProductName(name)),
    setFormProductDescription: (description) => dispatch(PRODUCT_ACT.setFormProductDescription(description)),
    setFormProductPrice: (price) => dispatch(PRODUCT_ACT.setFormProductPrice(price)),
    setFormProductCollection: (collectionId) => dispatch(PRODUCT_ACT.setFormProductCollection(collectionId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertProduct);
