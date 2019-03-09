import Cookies from 'js-cookie';
import { isEmpty, get } from 'lodash';
import * as api from 'config/api';
import * as CONST from 'utils/actionTypes/auth';

import { getUserDetail } from './user';

export const login = (username, password) => {
  return async (dispatch) => {
    const request = await api.login(username, password);

    if (!request.error) {
      const { status, data: { data, message } } = request;
      await Cookies.set('token', data.token);
      await Cookies.set('user_id', data.user_id);

      await dispatch(getUserDetail(data.user_id, data.token));
      await dispatch({ type: CONST.LOGIN_SUCCESS, message, status });

    } else {
      const message = get(request, 'details.response.data.message', request.details.response.statusText);
      const status = get(request, 'details.response.status');

      await dispatch({ type: CONST.LOGIN_FAILED, message: message, status });
    }
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    const token = Cookies.get('token');
    const userId = Cookies.get('user_id');
    if (!isEmpty(token)) {
      await dispatch(getUserDetail(userId, token));
      await dispatch({ type: CONST.CHECK_AUTH });
    }
  };
};
