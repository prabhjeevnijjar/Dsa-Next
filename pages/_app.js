import { Fragment } from 'react';
import Head from 'next/head';
import '../public/static/css/styles.css';
import Layout from '../common/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
