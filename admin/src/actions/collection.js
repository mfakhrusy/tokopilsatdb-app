import { get } from 'lodash';

import * as api from 'config/api';
import * as MISC_ACT from 'actions/misc';
import * as CONST from 'utils/actionTypes/collection';

export const getCollectionList = () => {
  return async (dispatch) => {
    const request = await api.getCollectionList();

    if (!request.error) {
      const { data: collectionList } = request.data;
      dispatch({ type: CONST.GET_COLLECTION_LIST, payload: collectionList });
    }
  };
};

export const setFormCollectionMedia = (media) => {
  return {
    type: CONST.SET_FORM_COLLECTION_MEDIA,
    payload: media,
  };
};

export const setFormCollectionLabel = (label) => {
  return {
    type: CONST.SET_FORM_COLLECTION_LABEL,
    payload: label,
  };
};

export const uploadFormCollection = (formData) => {
  return async (dispatch) => {
    const request = await api.addCollection(formData);
    await dispatch(MISC_ACT.showModalInfo(true));
    await dispatch(MISC_ACT.setModalInfoLoading(true));

    if (!request.error) {
      const message = get(request, 'data.message', 'success');
      await dispatch({ type: CONST.UPLOAD_FORM_COLLECTION_SUCCESS, payload: message });
      setTimeout(async () => { await dispatch(MISC_ACT.setModalInfoLoading(false)); }, 1000);
    } else {
      console.log('err', request);
    }
  };
};