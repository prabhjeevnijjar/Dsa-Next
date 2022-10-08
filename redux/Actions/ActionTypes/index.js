import * as actionConstant from '../ActionConstant/index';

export const userAuthSuccess = (payload) => ({ type: actionConstant.USER_AUTH_SUCCESS, payload });
export const authStepSuccess = (payload) => ({ type: actionConstant.AUTH_STEP_SUCCESS, payload });
export const loadingSuccess = (payload) => ({ type: actionConstant.LOADING_SUCCESS, payload });
