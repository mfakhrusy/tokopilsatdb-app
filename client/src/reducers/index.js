import { combineReducers } from 'redux';
import companyReducers from './company';
import collectionReducers from './collection';

export default combineReducers({
  ...companyReducers,
  ...collectionReducers,
});
