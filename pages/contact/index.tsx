import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => {
  return import('../../components/map');
}, { ssr:false });

export const Contact = () => (
  <MapComponent />
);

export default Contact;