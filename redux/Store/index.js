import axios from 'axios';
import getConfig from 'next/config';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../Reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const { baseUrl } = getConfig().publicRuntimeConfig;
let store;

function initStore(initialState) {
  const axiosInstance = axios.create({
    baseURL: baseUrl || 'https://dsa-help-platform.onrender.com',
    //  'https://dsa-help-platform.onrender.com',
  });
  return configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: /* process.env.NODE_ENV === 'development' ? [thunkMiddleware.withExtraArgument(axiosInstance), logger] : */ [thunkMiddleware.withExtraArgument(axiosInstance)],
  });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState = {}) {
  const store = initializeStore(initialState);
  return store;
}
