import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="blue" stroke="white" stroke-width="2"/>
      <text x="50%" y="50%" dy=".3em" text-anchor="middle" font-size="12" fill="white">M</text>
    </svg>
  `),
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Point of the icon that corresponds to the marker's location
  popupAnchor: [0, -40], // Point where the popup should open relative to the icon
});

const LeafletMap = () => {
  const position = [12.9716, 77.5946]; // Example: Bangalore, India

  return (
    <div className="w-[70%] h-[500px]">
      <MapContainer center={position} zoom={10} style={{ width: "100%", height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>Custom SVG Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
