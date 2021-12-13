import Image from 'next/image';
import { styles } from '../../styles/clients/woman-buy';

export const WomanBuy = () => {
  return (
    <>
      <section>
        <div className="image-container">
          <Image
            src="/images/clients/woman-buy2.svg"
            width={1000}
            height={600}
          />
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};
