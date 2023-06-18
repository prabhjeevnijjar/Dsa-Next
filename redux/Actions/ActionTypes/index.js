import * as actionConstant from '../ActionConstant/index';

export const userAuthSuccess = (payload) => {
  return { type: actionConstant.USER_AUTH_SUCCESS, payload };
};

export const getAllBookmarksSuccess = (payload) => {
  return { type: actionConstant.GET_ALL_BOOKMARKS, payload };
};

export const authStepSuccess = (payload) => ({ type: actionConstant.AUTH_STEP_SUCCESS, payload });

export const loadingSuccess = (payload) => ({ type: actionConstant.LOADING_SUCCESS, payload });

export const getAllResources = (payload) => ({ type: actionConstant.GET_ALL_RESOURCES, payload });
