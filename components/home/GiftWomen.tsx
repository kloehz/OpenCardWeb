import Image from 'next/image';
import { styles } from '../../styles/home/giftWomen';

export const GiftWomen = () => {
  return (
    <>
      <div className='div-container'>
        <div className='image-container'>
          <Image
            src='/images/home/women-svg.svg'
            width={500}
            height={500}
          />
        </div>
        <div className='credit-card'>
          <h3 className='title'>OPEN CARD</h3>
          <h5 className='buy-with-card'>Compra todo en cuotas con tu tarjeta<br/>¡Date el gusto!</h5>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
