import { styles } from '../../styles/contact-us/map-and-contact';
import Map from '../map';
import Image from 'next/image';

const MapAndContact = () => {
  return (
    <>
      <section>
        <div className="map-container">
          <Map childrens={[{name: 'Open Card', lat: -33.8931903, long: -60.5753027}]} zoom={16} />
        </div>
        <div className="contact-container">
          <figure>
            <Image
              src="/images/contact-us/location-icon.svg"
              height={50}
              width={50}
            />
            <h3>Pueyrredon 844, Pergamino, Bs As</h3>
          </figure>
          <figure>
            <Image
              src="/images/contact-us/whatsapp-icon.svg"
              height={50}
              width={50}
            />
            <div>
              <h3>2477344507</h3>
              <h3>2477344511</h3>
            </div>
          </figure>
          <figure>
            <Image
              src="/images/contact-us/phone-icon.svg"
              height={50}
              width={50}
            />
            <h3>2477-433859</h3>
          </figure>
          <figure>
            <Image
              src="/images/contact-us/card-icon.svg"
              height={50}
              width={50}
            />
            <div>
              <h3>opencardper@hotmail.com</h3>
              <h3>mutual-elalba@hotmail.com</h3>
            </div>
          </figure>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};

export default MapAndContact;