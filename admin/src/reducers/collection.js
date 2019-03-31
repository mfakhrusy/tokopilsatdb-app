import { combineReducers } from 'redux';

import * as CONST from 'utils/actionTypes/collection';

const initialState = {
  collectionList: [],
  formCollection: {
    media: {},
    label: '',
    message: '',
    success: '',
  },
};

const collectionList = (state = initialState.collectionList, action) => {
  switch (action.type) {
  case CONST.GET_COLLECTION_LIST:
    return action.payload;
  default:
    return state;
  }
};

const formCollection = (state = initialState.formCollection, action) => {
  switch (action.type) {
  case CONST.SET_FORM_COLLECTION_MEDIA: {
    const { payload } = action;
    return Object.assign({}, state, { media: payload });
  }
  case CONST.SET_FORM_COLLECTION_LABEL: {
    const { payload } = action;
    return Object.assign({}, state, { label: payload });
  }
  case CONST.UPLOAD_FORM_COLLECTION_SUCCESS: {
    const { payload } = action;

    return Object.assign({}, state, { message: payload, success: true });
  }
  default: {
    return state;
  }
  }
};

export default combineReducers({
  formCollection,
  collectionList,
});
