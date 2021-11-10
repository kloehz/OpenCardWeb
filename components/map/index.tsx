import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerComponent } from './Marker';
import { ICords } from '../../types/cords';

interface IMap {
  childrens: ICords[]
  zoom?: number
}

const Map = ({ childrens, zoom = 11 }: IMap) => {
  return (
    <MapContainer center={[-33.8931985,-60.5774754]} zoom={zoom} scrollWheelZoom={false} style={{height: '100%', width: '100%', position: 'sticky'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        childrens.map(({lat, long, name}, i) => {
          return <MarkerComponent lat={lat} long={long} name={name} key={i}/>;
        })
      }
    </MapContainer>
  );
};

export default Map;