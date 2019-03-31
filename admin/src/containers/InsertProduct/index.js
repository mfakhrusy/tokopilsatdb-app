import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import {
  Button,
} from 'reactstrap';
import { isEmpty, isNumber } from 'lodash';
import currency from 'currency.js';

import InsertImageWidget from 'components/InsertImageWidget';
import InsertTextWidget from 'components/InsertTextWidget';
import InsertSelectWidget from 'components/InsertSelectWidget';

import { formProductTypes } from 'utils/types/product';
import { collectionListTypes } from 'utils/types/collection';

import * as PRODUCT_ACT from 'actions/product';

import './index.scss';

class InsertProduct extends Component {
  state = {
    popoverShow: {
      price: false,
    },
    formTextValue: {
      name: '',
      description: '',
      price: '',
    },
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { formTextValue } = this.state;

    if (prevState.formTextValue.price !== formTextValue.price) {
      this.togglePopover('price', false);
    }
  }
  
  validateEmptinessFormProduct = () => {
    const {
      formProduct: {
        collectionId,
        description,
        media,
        name,
        price,
      }
    } = this.props;

    if (isEmpty(collectionId)) {
      return false;
    }

    if (isEmpty(description)) {
      return false;
    }

    if (media instanceof Blob !== true) {
      return false;
    }

    if (isEmpty(name)) {
      return false;
    }

    if (!isNumber(price) || price === 0) {
      return false;
    }

    return true;
  }

  handleSetTextValue = async (type, value) => {
    const { formTextValue } = this.state;
    const {
      setFormProductDescription,
      setFormProductName,
      setFormProductPrice,
    } = this.props;

    const setFormText = {
      description: setFormProductDescription,
      name: setFormProductName,
      price: setFormProductPrice,
    };

    let isValid = true;
    let formNewValue = value;

    switch(type) {
    case 'price': {
      const strippedValue = value.replace(/\./g, '');
      const regex = /^[0-9]+$/;
      isValid = value === '' ? true : regex.test(strippedValue);
      if (!isValid) {
        this.togglePopover(type, true);
      } else {
        formNewValue = strippedValue;
      }
      break;
    }
    default:
      break;
    }

    const tempFormTextValue = update(formTextValue, {
      [type]: {$set: formNewValue},
    });

    if (isValid) {
      this.setState({ formTextValue: tempFormTextValue });

      setFormText[type](formNewValue);
    }
  }

  togglePopover = (type, value) => {
    const { popoverShow } = this.state;

    const tempPopoverShow = update(popoverShow, {
      [type]: {$set: value}
    });

    this.setState({ popoverShow: tempPopoverShow });
  }

  handleSelectCollection = (selectedOption) => {
    const { setFormProductCollection } = this.props;

    setFormProductCollection(selectedOption.collection_id);
  }

  handleFormatPrice = () => {
    const { formTextValue: { price } } = this.state;

    const formattedPrice = currency(price, {
      precision: 0,
      separator: '.',
    }).format();

    return formattedPrice;
  }

  uploadFormProduct = () => {
    const { uploadFormProduct, formProduct } = this.props;
    
    uploadFormProduct(formProduct);
  }

  render() {
    const {
      setFormProductMedia,
      collectionList,
    } = this.props;

    const {
      popoverShow,
      formTextValue,
    } = this.state;

    return (
      <div className="insert-product-container">
        <div className="insert-product">
          <header>
            <h2>Insert Your Product</h2>
          </header>
          <section className="product-thumbnail">
            <InsertImageWidget
              label="Product"
              type="thumbnail"
              onSelectImage={setFormProductMedia}
            />
          </section>
          <section className="product-collection">
            <InsertSelectWidget
              label="Product Collection"
              type="collection"
              options={collectionList.map((item) => ({ ...item, value: item.collection_id, label: item.label }))}
              onSelect={this.handleSelectCollection}
            />
          </section>
          <section className="product-name">
            <InsertTextWidget
              label="Product Name"
              type="name"
              value={formTextValue.name}
              onEdit={this.handleSetTextValue}
            />
          </section>
          <section className="product-description">
            <InsertTextWidget
              multiline
              label="Product Description"
              type="description"
              value={formTextValue.description}
              onEdit={this.handleSetTextValue}
            />
          </section>
          <section className="product-price">
            <InsertTextWidget
              label="Product Price"
              type="price"
              value={this.handleFormatPrice()}
              popover={{
                show: popoverShow.price,
                text: 'Can only contain number',
              }}
              onEdit={this.handleSetTextValue}
            />
          </section>
          <footer>
            <Button
              onClick={this.uploadFormProduct}
              disabled={!this.validateEmptinessFormProduct()}
            >
              Save
            </Button>
          </footer>
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
  uploadFormProduct: PropTypes.func.isRequired,
  collectionList: PropTypes.arrayOf(collectionListTypes).isRequired,
  formProduct: formProductTypes.isRequired,
};

const mapStateToProps = (state) => {
  return {
    formProduct: state.product.formProduct,
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
    uploadFormProduct: (formProduct) => dispatch(PRODUCT_ACT.uploadFormProduct(formProduct)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertProduct);
