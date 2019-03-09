import { combineReducers } from 'redux';

import * as CONST from 'utils/actionTypes/product';

const initialState = {
  formProduct: {
    media: {},
    name: '',
    description: '',
    collectionId: '',
    price: 0,
    message: '',
    success: '',
  },
};

const formProduct = (state = initialState.formProduct, action) => {
  switch (action.type) {
    case CONST.SET_FORM_PRODUCT_MEDIA: {
      const { payload } = action;
      return Object.assign({}, state, { media: payload });
    }
    case CONST.SET_FORM_PRODUCT_NAME: {
      const { payload } = action;
      return Object.assign({}, state, { name: payload });
    }
    case CONST.SET_FORM_PRODUCT_DESCRIPTION: {
      const { payload } = action;
      return Object.assign({}, state, { description: payload });
    }
    case CONST.SET_FORM_PRODUCT_PRICE: {
      const { payload } = action;
      return Object.assign({}, state, { price: payload });
    }
    case CONST.SET_FORM_PRODUCT_COLLECTION: {
      const { payload } = action;
      return Object.assign({}, state, { collectionId: payload });
    }
    case CONST.UPLOAD_FORM_PRODUCT_SUCCESS: {
      const { payload } = action;

      return Object.assign({}, state, { message: payload, success: true });
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  formProduct,
});
