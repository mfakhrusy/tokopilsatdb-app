import * as CONST from 'utils/actionTypes/misc';

export const showModalInfo = (payload) => {
  return {
    type: CONST.SHOW_MODAL_INFO,
    payload,
  };
};

export const setModalInfoLoading = (payload) => {
  return {
    type: CONST.SET_MODAL_INFO_LOADING,
    payload,
  };
};
