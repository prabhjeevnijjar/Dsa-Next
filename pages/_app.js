import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../common/Layout';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { useStore } from '../redux/Store';
import Cookies from 'js-cookie';
import * as ActionCreator from '../redux/Actions/ActionCreator/AuthAction';

import '../public/static/css/styles.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps?.reduxState);

  const setTokenFn = async () => {
    const token = await Cookies.get('dsa-token');
    if (token) {
      store.dispatch(ActionCreator.checkTokenAction(token));
    }
  };

  useEffect(() => {
    setTokenFn();
  });

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Toaster />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
