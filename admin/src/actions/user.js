import * as api from 'config/api';
import { GET_USER_DETAIL_SUCCESS, GET_USER_DETAIL_FAILED } from 'utils/actionTypes/user';
import Cookies from 'js-cookie';

export const getUserDetail = (userId, token) => {
  return async (dispatch) => {
    const request = await api.getUserDetail(userId, token);
    if (!request.error) {
      const { data } = request.data;
      dispatch({ type: GET_USER_DETAIL_SUCCESS, payload: data });
    } else {
      Cookies.remove('token');
      Cookies.remove('user_id');
    }
  };
};
