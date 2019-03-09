import * as api from 'config/api';
import { GET_COLLECTION_LIST } from 'utils/actionTypes/collection';

export const getCollectionList = () => {
  return async (dispatch) => {
    const request = await api.getCollectionList();

    if (!request.error) {
      const { data: collectionList } = request.data;
      dispatch({ type: GET_COLLECTION_LIST, payload: collectionList });
    }
  };
};
