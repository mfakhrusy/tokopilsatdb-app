import { combineReducers } from 'redux';
import companyReducers from './company';
import userReducers from './user';
import authReducers from './auth';
import uiReducers from './ui';
import collectionReducers from './collection';
import productReducers from './product';
import miscReducers from './misc';

export default combineReducers({
  ...companyReducers,
  ...userReducers,
  ...authReducers,
  collection: collectionReducers,
  product: productReducers,
  ui: uiReducers,
  misc: miscReducers,
});
