import Cookies from 'js-cookie';
import API from '../../../config/endpoints.json';
import * as actionType from '../ActionTypes/index';

export const GetBookmarksAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionType.loadingSuccess({ bookmarkLoading: true }));
  const token = Cookies.get('auth-token');
  return api
    .get(API.getBookmarksApi, {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then((res) => {
      if (res.data.code === 200) {
        if (res.data.status === true) {
          dispatch(actionType.getAllBookmarksSuccess(res.data?.data));
        }
        dispatch(actionType.loadingSuccess({ bookmarkLoading: false }));
      }
    })
    .catch(() => {});
};
