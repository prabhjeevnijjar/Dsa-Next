import toast from 'react-hot-toast';
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
    .catch();
};
