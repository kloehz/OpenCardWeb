import Head from 'next/head';
import { useRouter } from 'next/router';
import { headerInfo } from '../../constants/headerInfo';

export const Header = () => {

  const { pathname } = useRouter();
  const { title, description } = headerInfo(pathname);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};
