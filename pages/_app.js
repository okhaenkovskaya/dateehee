import Head from 'next/head';
import Layout from '../components/layout/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>DataArt Winter IT Camp 2025</title>
        <meta
          name="description"
          content="The project is created for the 'DataArt Winter IT Camp 2025'"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
