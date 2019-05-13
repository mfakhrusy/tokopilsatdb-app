import * as CONST from 'utils/actionTypes/auth';
import { HTTP_STATUS_OK } from 'utils/constants';

const initialState = {
  message: '',
  isAuthenticated: false,
  status: HTTP_STATUS_OK,
};

const auth = (state = initialState, action) => {
  switch(action.type) {
  case CONST.LOGIN_SUCCESS: {
    const { message, status } = action;
    return Object.assign({}, state, { message, isAuthenticated: true, status });
  }
  case CONST.LOGIN_FAILED: {
    const { message, status } = action;
    return Object.assign({}, state, { message, isAuthenticated: false, status });
  }
  case CONST.CHECK_AUTH: {
    const { message } = action;
    return Object.assign({}, state, { message, isAuthenticated: true });
  }
  default:
    return state;
  }
};

export default {
  auth
};
