import { GET_COMPANY_DETAIL } from 'utils/actionTypes/company';

const companyDetail = (state = {}, action) => {
  switch (action.type) {
    case GET_COMPANY_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default {
  companyDetail,
};
