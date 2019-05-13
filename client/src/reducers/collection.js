import * as C from 'utils/actionTypes/collection';

const initialState = {
  collectionList: [],
  collectionDetail: {},
};

const collectionList = (state = initialState.collectionList, action) => {
  switch (action.type) {
  case C.GET_COLLECTION_LIST:
    return action.payload;
  default:
    return state;
  }
};

const collectionDetail = (state = initialState.collectionDetail, action) => {
  switch (action.type) {
  case C.GET_COLLECTION_DETAIL:
    return action.payload;
  default:
    return state;
  }
};

export default {
  collectionList,
  collectionDetail,
};
