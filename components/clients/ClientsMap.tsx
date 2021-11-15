import { styles } from '../../styles/clients/clients-map';
import Map from '../map';
import { cords } from '../map/cords';

export const ClientsMap = () => {
  return (
    <>
      <section>
        <h1>¡ENCONTRALOS ACA!</h1>
        <div className="map-container">
          <Map childrens={cords} zoom={16} />
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};
