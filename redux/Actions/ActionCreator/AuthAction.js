import toast from 'react-hot-toast';
import API from '../../../config/endpoints.json';
import * as actionType from '../ActionTypes/index';
import Cookies from 'js-cookie';
import Router from 'next/router';

export const CheckEmailAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionType.loadingSuccess({ loginLoading: true }));
  return api
    .post(API.checkEmail, payload)
    .then((res) => {
      if (res.data.code === 200) {
        if (res.data.status === true) {
          dispatch(actionType.authStepSuccess({ onStep: 2 }));
        }
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
      } else {
        toast.success('Please Register here !');
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
        dispatch(actionType.authStepSuccess({ onStep: 3 }));
      }
    })
    .catch();
};

export const LoginAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionType.loadingSuccess({ loginLoading: true }));
  return api
    .post(API.loginApi, payload)
    .then((res) => {
      if (res.data.code === 200) {
        if (res.data.status === true) {
          Cookies.set('dsa-token', res.data.data.token);
          Router.push('/');
        }
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
      } else {
        toast.error(res.data.message || 'invalid passs');
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
      }
    })
    .catch((e) => {
      toast.error('Invalid Credentials');
    });
};

export const checkTokenAction = (payload) => async (dispatch, getState, api) => {
  return api
    .post(API.checkTokenApi, {}, { headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${payload}` } }, { method: 'get' })
    .then((res) => {
      if (res.data?.code === 200) {
        if (res.data.status === true) dispatch(actionType.userAuthSuccess({ ...res.data.data, token: res.data.token, isLogin: true }));
        Cookies.set('auth-token', res.data.data.token);
      }
    })
    .catch(() => {
      Cookies.remove('auth-token');
      Cookies.remove('dsa-token');
    });
};

export const CheckRegisterAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionType.loadingSuccess({ loginLoading: true }));
  return api
    .post(API.registerApi, payload)
    .then((res) => {
      if (res.data.code === 200) {
        toast('Registration Successful !');
        dispatch(LoginAction({ email: payload.Email, password: payload.Password }));
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
      } else {
        toast.sucess('Please Register');
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
        dispatch(actionType.authStepSuccess({ onStep: 3 }));
      }
    })
    .catch();
};
