import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function GetIcon() {
  return L.icon({
    iconUrl: '/images/logo.png',
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
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
