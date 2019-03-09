// all form state goes here
import { combineReducers } from 'redux';
import * as CONST from 'utils/actionTypes/misc';

const initialState = {
  modal: {
    info: {
      show: false,
      loading: false,
      message: '',
    },
  },
};

const modalInfo = (state = initialState.modal.info, action) => {
  switch (action.type) {
    case CONST.SHOW_MODAL_INFO: {
      const { payload } = action;
      return Object.assign({}, state, { show: payload });
    }
    case CONST.SET_MODAL_INFO_LOADING: {
      const { payload } = action;
      return Object.assign({}, state, { loading: payload });
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  modalInfo,
});
