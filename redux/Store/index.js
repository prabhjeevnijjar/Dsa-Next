import axios from 'axios';
import getConfig from 'next/config';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../Reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

const { baseUrl } = getConfig().publicRuntimeConfig;
let store;

function initStore(initialState) {
  console.log({ baseUrl });
  const axiosInstance = axios.create({
    baseURL: baseUrl || 'http://localhost:3001',
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
