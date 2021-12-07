import type { NextPage } from 'next';
import Head from 'next/head';
import { GiftWomen } from '../components/home/GiftWomen';
import { OurClients } from '../components/home/OurClients';
import { Presentation } from '../components/home/Presentation';
import { Questions } from '../components/home/Questions';
import UAParser from 'ua-parser-js';

const Home: NextPage = ({ deviceType }: any) => {
  return (
    <>
      {/* Pasar todo esto a un componente Home */}
      <Presentation />
      <OurClients deviceType={deviceType}/>
      <GiftWomen />
      <Questions />
    </>
  );
};

Home.getInitialProps = ({ req }) => {
  let userAgent: any;

  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  
  return { deviceType };
};

export default Home;