import * as CONST from 'utils/actionTypes/product';

export const setFormProductMedia = (media) => {
  return {
    type: CONST.SET_FORM_PRODUCT_MEDIA,
    payload: media,
  };
};

export const setFormProductName = (name) => {
  return {
    type: CONST.SET_FORM_PRODUCT_NAME,
    payload: name,
  };
};

export const setFormProductDescription = (description) => {
  return {
    type: CONST.SET_FORM_PRODUCT_DESCRIPTION,
    payload: description,
  };
};

export const setFormProductPrice = (price) => {
  return {
    type: CONST.SET_FORM_PRODUCT_PRICE,
    payload: price,
  };
};

export const setFormProductCollection = (collectionId) => {
  return {
    type: CONST.SET_FORM_PRODUCT_COLLECTION,
    payload: collectionId,
  };
};
