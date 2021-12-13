import React from 'react';
import Image from 'next/image';
import styles from '../../styles/home/homeStyles';
import { Divider } from '../Divider';

export const Presentation = () => {
  return (
    <>
      <div className="image-open-card">
        <Image
          src="/images/home/presentation.svg"
          alt="Imagen principal"
          height={600}
          width={1000}
        />
      </div>
      <Divider marginSide={'left'}/>
      <style jsx>
        { styles }
      </style>
    </>
  );
};
