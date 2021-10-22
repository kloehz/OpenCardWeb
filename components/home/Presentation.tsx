import React from 'react';
import Image from 'next/image';
import styles from '../../styles/homeStyles';
import { Divider } from '../Divider';

export const Presentation = () => {
    return (
        <>
            <div className="imageOpenCard">
                <Image
                    src="/images/home/png.png"
                    alt="Imagen principal"
                    layout="responsive"
                    width={700}
                    height={475}
                />
            </div>
            <Divider marginSide={'left'}/>
            <Divider marginSide={'rigth'}/>
            <style jsx>
                { styles }
            </style>
        </>
    );
}
