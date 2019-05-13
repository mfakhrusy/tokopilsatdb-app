import * as CONST from 'utils/actionTypes/ui';

export const toggleExtendNavigationPanel = (bool) => {
  return {
    type: CONST.TOGGLE_EXTEND_NAVIGATION_PANEL,
    payload: bool,
  };
};

export const changeLocationNavigationPanel = (location) => {
  return {
    type: CONST.CHANGE_LOCATION_NAVIGATION_PANEL,
    location,
  };
};
