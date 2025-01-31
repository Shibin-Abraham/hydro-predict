import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

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
const tileLayers = {
    "OpenStreetMap": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "Satellite (Google)": "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    "Water Bodies (ESRI)": "https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/tile/{z}/{y}/{x}",
    "OpenSeaMap (Oceans)": "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
    "sample":"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    "sample2":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    
  };
const LeafletMap = () => {
    const [selectedLayer, setSelectedLayer] = useState("OpenStreetMap");
  const position = [9.8436, 76.9762]; // Example: Bangalore, India

  return (
    <div className="w-[70%] h-[500px]">
        <select
        onChange={(e) => setSelectedLayer(e.target.value)}
        className="absolute top-3 left-3 z-[1000] bg-white p-2 rounded shadow-md"
      >
        {Object.keys(tileLayers).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <MapContainer center={position} zoom={10} style={{ width: "100%", height: "100%" }}>
      <TileLayer
  url={tileLayers[selectedLayer]}
/>


        <Marker position={position} icon={customIcon}>
          <Popup>Custom SVG Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
