import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function GetIcon() {
  return L.icon({
    iconUrl: '/images/logo.png',
    iconSize: [30, 30],
  });
}

interface IMarker {
    name: string
    lat: number
    long: number
}

export const MarkerComponent = ({ lat, long, name }: IMarker) => {
  return (
    <Marker position={[lat, long]} icon={GetIcon()}>
      <Popup>
        {name}
      </Popup>
    </Marker>
  );
};
