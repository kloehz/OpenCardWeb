import dynamic from 'next/dynamic';


const aboutUs = () => {
  const MapComponent = dynamic(() => {
    return import('../../components/map');
  }, { ssr:false });

  return (
    <>
      <MapComponent />
    </>
  );
};

export default aboutUs;