import toast from 'react-hot-toast';
import API from '../../../config/endpoints.json';
import * as actionType from '../ActionTypes/index';

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
        toast.error('Please Register');
        console.log(res.data.message);
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
        dispatch(actionType.authStepSuccess({ onStep: 3 }));
      }
    })
    .catch();
};

export const CheckRegisterAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionType.loadingSuccess({ loginLoading: true }));
  return api
    .post(API.registerApi, payload)
    .then((res) => {
      if (res.data.code === 200) {
        if (res.data.status === true) {
          dispatch(actionType.authStepSuccess({ onStep: 2 }));
        }
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
      } else {
        toast.error('Please Register');
        console.log(res.data.message);
        dispatch(actionType.loadingSuccess({ loginLoading: false }));
        dispatch(actionType.authStepSuccess({ onStep: 3 }));
      }
    })
    .catch();
};
