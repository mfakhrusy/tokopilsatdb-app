import { GET_COLLECTION_LIST } from 'utils/actionTypes/collection';

const initialState = {
  collectionList: [],
};

const collectionList = (state = initialState.collectionList, action) => {
  switch (action.type) {
  case GET_COLLECTION_LIST:
    return action.payload;
  default:
    return state;
  }
};

export default {
  collectionList,
};
