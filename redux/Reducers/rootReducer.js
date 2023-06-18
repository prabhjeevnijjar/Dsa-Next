import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { ResourceReducer } from './ResourceReducer';
import { BookmarkReducer } from './BookmarkReducer';

export default combineReducers({
  authInfo: AuthReducer,
  resourceInfo: ResourceReducer,
  bookmarksInfo: BookmarkReducer,
});
