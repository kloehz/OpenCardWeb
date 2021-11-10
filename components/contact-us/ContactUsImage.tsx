import Image from 'next/image';
import { styles } from '../../styles/contact-us/contact-us-image';

export const ContactUsImage = () => {
  return (
    <>
      <section>
        <h2>C O N T A C T A N O S</h2>
        <Image
          src='/images/contact-us/map-girl-location.svg'
          height={450}
          width={600}
        />
      </section>
      <style jsx>{styles}</style>
    </>
  );
};