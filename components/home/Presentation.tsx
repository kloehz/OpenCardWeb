import React from 'react';
import Image from 'next/image';
import styles from '../../styles/home/homeStyles';
import { Divider } from '../Divider';

export const Presentation = () => {
  return (
    <>
      <div className="image-open-card">
        <Image
          src="/images/home/png.png"
          alt="Imagen principal"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>
      <Divider marginSide={'left'}/>
      <style jsx>
        { styles }
      </style>
    </>
  );
};
