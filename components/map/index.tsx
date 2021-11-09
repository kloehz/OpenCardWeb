import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerComponent } from './Marker';
import { cords } from './cords';

const Map = () => {
  return (
    <MapContainer center={[-33.8931985,-60.5774754]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: '100%', position: 'fixed'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        cords.map(({lat, long, name}, i) => {
          return <MarkerComponent lat={lat} long={long} name={name} key={i}/>;
        })
      }
    </MapContainer>
  );
};

export default Map;