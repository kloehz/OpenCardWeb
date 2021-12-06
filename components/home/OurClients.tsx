import React from 'react';
import { styles } from '../../styles/home/ourClients';
import Image from 'next/image';
import { Divider } from '../Divider';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export const OurClients = ({ deviceType }: any) => {

  const images = [];

  for(let i = 1; i<=8; i++){
    images.push(`/images/our_clients/${i}.jpeg`);
  }

  return (
    <>
      <div>
        <h1 style={{textAlign: 'center', marginBottom: '0'}}>Nuestros clientes</h1>
        <h5 style={{textAlign: 'center'}}>Ellos confian en nosotros</h5>
        <Carousel
          ssr
          deviceType={deviceType}
          infinite={true}
          autoPlay={true}
          containerClass='carousel-container'
          itemClass='carousel-image-item'
          autoPlaySpeed={3000}
          responsive={responsive}
          centerMode={true}
          arrows={false}
        >
          {
            images.map((image, index) => {
              return (
                <div key={index} className="image-next">
                  <Image src={image} height={200} width={200} />
                </div>
              );
            })
          }
        </Carousel>    
        <style jsx>
          { styles }
        </style>
      </div> 
      <Divider marginSide={'rigth'}/>
    </>
  );
};
