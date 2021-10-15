import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import NavBar from '../components/layout/navbar/NavBar';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <div style={{width:'100vw', display: 'flex', justifyContent: 'center'}}>
        <Image
          src="/images/icon-logo.png"
          height={75}
          width={300}
          alt=""
        />
      </div>
    </>
  )
}

export default Home;