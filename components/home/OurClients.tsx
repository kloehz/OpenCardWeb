import React from 'react';
import { styles } from '../../styles/home/ourClients';
import Image from 'next/image';
import { Divider } from '../Divider';

export const OurClients = () => {

  const images = [];

  for(let i = 1; i<=28; i++){
    images.push(`/images/our_clients/${i}.jpeg`);
  }

  return (
    <>
      <div className="div-container">
        <h2 style={{textAlign: 'center', marginBottom: '0'}}>Nuestros clientes</h2>
        <h5>Ellos confian en nosotros</h5>
        <div className="images-container">
          {
            images.map((image, index) => {
              return (
                <div key={index} className="image-next" >
                  <Image src={image} key={index} height={100} width={100} />;
                </div>
              );
            })
          }
        </div>
        <style jsx>
          { styles }
        </style>
      </div> 
      <Divider marginSide={'rigth'}/>
    </>
  );
};
