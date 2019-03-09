import {
  GET_USER_DETAIL_SUCCESS, 
  GET_USER_DETAIL_FAILED,
} from 'utils/actionTypes/user';

const initialState = {
  userDetail: {},
};

const userDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAIL_SUCCESS:
      return action.payload;
    case GET_USER_DETAIL_FAILED:
      return { error: true, message: action.message };
    default:
      return state;
  }
};

export default {
  userDetail,
};
