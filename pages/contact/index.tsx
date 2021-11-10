import dynamic from 'next/dynamic';
import { ContactUsImage } from '../../components/contact-us/ContactUsImage';
import { styles } from '../../styles/contact-us/contact-us';

const MapComponent = dynamic(() => {
  return import('../../components/contact-us/MapAndContact');
}, { ssr:false });

export const Contact = () => {
  return (
    <>
      <div className="contact-us-container">
        <ContactUsImage />
        <MapComponent />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Contact;