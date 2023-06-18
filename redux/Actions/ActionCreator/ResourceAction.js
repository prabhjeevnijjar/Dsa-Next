import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import Router from 'next/router';
import API from '../../../config/endpoints.json';
import * as actionType from '../ActionTypes/index';

export const GetResourcesAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionType.loadingSuccess({ resourceLoading: true }));
  return api
    .get(API.getAllResourcesApi, payload)
    .then((res) => {
      if (res.data.code === 200) {
        if (res.data.status === true) {
          dispatch(actionType.getAllResources(res.data?.data));
        }
        dispatch(actionType.loadingSuccess({ resourceLoading: false }));
      } else {
        toast.error('Something went wrong !');
        dispatch(actionType.loadingSuccess({ resourceLoading: false }));
        dispatch(actionType.authStepSuccess({ onStep: 3 }));
      }
    })
    .catch(() => {});
};

export const PostResourcesAction = (payload) => async (dispatch, getState, api) => {
  const token = Cookies.get('auth-token');
  return api
    .post(API.postResourceApi, payload, { headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${token}` } })
    .then((res) => {
      if (res.data.code === 201) {
        if (res.data.status === true) {
          toast.success(res.data.message);
          Router.push('/');
        } else toast.warn('Could not submit post');
      } else {
        toast.error(res.data.message || 'Could not post');
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data.message || 'Could not post');
    });
};
