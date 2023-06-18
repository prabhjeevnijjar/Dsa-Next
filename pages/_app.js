import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../common/Layout';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { useStore } from '../redux/Store';
import '../public/static/css/styles.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps?.reduxState);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Toaster />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
