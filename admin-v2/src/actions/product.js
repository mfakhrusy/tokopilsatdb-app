import { toNumber, get } from 'lodash';

import * as api from 'config/api';
import * as CONST from 'utils/actionTypes/product';
import * as MISC_ACT from 'actions/misc';

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
    payload: toNumber(price),
  };
};

export const setFormProductCollection = (collectionId) => {
  return {
    type: CONST.SET_FORM_PRODUCT_COLLECTION,
    payload: collectionId,
  };
};

export const uploadFormProduct = (formData) => {
  return async (dispatch) => {
    const request = await api.addProduct(formData);
    await dispatch(MISC_ACT.showModalInfo(true));
    await dispatch(MISC_ACT.setModalInfoLoading(true));

    if (!request.error) {
      const message = get(request, 'data.message', 'success');
      await dispatch({ type: CONST.UPLOAD_FORM_PRODUCT_SUCCESS, payload: message });
      setTimeout(async () => { await dispatch(MISC_ACT.setModalInfoLoading(false)); }, 1000);
    } else {
      console.log('err', request);
    }
  };
};