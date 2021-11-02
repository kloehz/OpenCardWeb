import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import { CssBaseline } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
