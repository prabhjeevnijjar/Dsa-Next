import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { ResourceReducer } from './ResourceReducer';

export default combineReducers({
  authInfo: AuthReducer,
  resourceInfo: ResourceReducer,
});
