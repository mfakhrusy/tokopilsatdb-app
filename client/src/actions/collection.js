import * as api from 'config/api';
import * as C from 'utils/actionTypes/collection';

export const getCollectionList = () => {
  return async (dispatch) => {
    const request = await api.getCollectionList();

    if (!request.error) {
      const { data: collectionList } = request.data;
      dispatch({ type: C.GET_COLLECTION_LIST, payload: collectionList });
    }
  };
};

export const getCollectionDetail = (collectionId) => {
  return async (dispatch) => {
    const request = await api.getCollectionDetail(collectionId);

    if (!request.error) {
      const { data: collectionDetail } = request.data;
      dispatch({ type: C.GET_COLLECTION_DETAIL, payload: collectionDetail });
    }
  };
};
