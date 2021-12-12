import Image from 'next/image';
import { styles } from '../../styles/contact-us/contact-us-image';

export const ContactUsImage = () => {
  return (
    <>
      <section>
        <Image
          src='/images/contact-us/map-girl-location2.svg'
          height={600}
          width={500}
        />
      </section>
      <style jsx>{styles}</style>
    </>
  );
};