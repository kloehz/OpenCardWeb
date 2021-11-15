import Image from 'next/image';
import { styles } from '../../styles/clients/woman-buy';

export const WomanBuy = () => {
  return (
    <>
      <section>
        <div className="dialog-container">
          <h3>¡Conoce nuestros comercios adheridos!</h3>
        </div>
        <div className="image-container">
          <Image
            src="/images/clients/woman-buy.svg"
            width={400}
            height={400}
          />
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};
