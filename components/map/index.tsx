import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function GetIcon() {
  return L.icon({
    iconUrl: '/images/map-icon.png',
    iconSize: [30, 30],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
}

const Map = () => {
  return (
    <MapContainer center={[-33.8931985,-60.5774754]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: '100%'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-33.8931985, -60.5774754]} icon={GetIcon()}>
        <Popup>
          OpenCard.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;