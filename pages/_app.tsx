import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import 'react-multi-carousel/lib/styles.css';
import { Header } from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
