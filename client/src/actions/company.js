import * as api from 'config/api';
import { GET_COMPANY_DETAIL } from 'utils/actionTypes/company';
import processThemeColor from 'helpers/themeColor';

export const getCompanyDetail = (companyUrl) => {
  return async (dispatch) => {
    const request = await api.getCompanyDetail(companyUrl);

    if (!request.error) {
      const { data: companyDetail } = request.data;
      companyDetail.themeColor = processThemeColor(companyDetail.theme_color);
      dispatch({ type: GET_COMPANY_DETAIL, payload: companyDetail });
    }
  };
};
