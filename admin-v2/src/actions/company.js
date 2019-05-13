import * as api from 'config/api';
import { GET_COMPANY_DETAIL } from 'utils/actionTypes/company';
import processThemeColor from 'helpers/themeColor';

export const getCompanyDetail = (companyUrl) => {
  return (dispatch) => {
    return api.getCompanyDetail(companyUrl)
      .then((res) => {
        const { data: companyDetail } = res.data;
        companyDetail.themeColor = processThemeColor(companyDetail.theme_color);
        dispatch({ type: GET_COMPANY_DETAIL, payload: companyDetail });
      });
  };
};
