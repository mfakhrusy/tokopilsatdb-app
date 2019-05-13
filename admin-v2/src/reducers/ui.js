import { combineReducers } from 'redux';
import * as CONST from 'utils/actionTypes/ui';
import { rootPath } from 'config/config';

const initialState = {
  navigationPanel: {
    isExtended: true,
    location: `${rootPath}/`,
  },
};

const navigationPanel = (state = initialState.navigationPanel, action) => {
  switch (action.type) {
  case CONST.TOGGLE_EXTEND_NAVIGATION_PANEL: {
    const { payload } = action;
    return Object.assign({}, state, { isExtended: payload });
  }
  case CONST.CHANGE_LOCATION_NAVIGATION_PANEL: {
    const { location } = action;
    return Object.assign({}, state, { location });
  }
  default:
    return state;
  }
};

export default combineReducers({
  navigationPanel,
});
