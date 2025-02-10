import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper";
import RainGaugeIcon from "../../Assets/icons/RainGaugeIcon";
import ReactDOMServer from "react-dom/server";

const rainGaugeIconHTML = ReactDOMServer.renderToStaticMarkup(<RainGaugeIcon />);

// Create a Leaflet DivIcon from the HTML string
const rainGaugeIconDiv = L.divIcon({
  html: rainGaugeIconHTML,
  className: "", // no additional CSS classes
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -60],
});

// Sample GeoJSON data for a Taluk in Idukki (Replace with actual GeoJSON)
const idukkiTalukGeoJSON = {
  "type": "Feature",
  "properties": { "name": "Sample Taluk" },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [77.03111, 9.70000],
        [77.09389, 9.66722],
        [77.10389, 9.72222],
        [77.05917, 9.74306],
        [77.02750, 9.74139],
        [77.11500, 9.75639],
        [76.96194, 9.84750],
        [76.92695, 9.84750],
        [76.88944, 9.79500],
        [77.03111, 9.70000]
      ]
    ]
  }
};

// Define a custom raingauge icon using an SVG embedded in a Leaflet divIcon.
const rainGaugeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
  <g>
    <!-- Gauge container -->
    <rect x="10" y="4" width="4" height="12" fill="#E0E7FF" stroke="#2563eb" stroke-width="0.5"/>
    <!-- Water level inside container -->
    <rect x="10" y="10" width="4" height="6" fill="#3B82F6"/>
    <!-- Collector circle at the bottom -->
    <circle cx="12" cy="18" r="3" fill="#3B82F6"/>
    <!-- Tick marks on the left side -->
    <line x1="10" y1="4" x2="9" y2="4" stroke="#2563eb" stroke-width="0.5"/>
    <line x1="10" y1="6" x2="9" y2="6" stroke="#2563eb" stroke-width="0.5"/>
    <line x1="10" y1="8" x2="9" y2="8" stroke="#2563eb" stroke-width="0.5"/>
    <line x1="10" y1="10" x2="9" y2="10" stroke="#2563eb" stroke-width="0.5"/>
    
  </g>
</svg>
`;

const rainGaugeIcon = L.divIcon({
  html: rainGaugeSVG,
  className: '', // No extra classes so only the SVG displays
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const tileLayers = {
  "OpenStreetMap": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "Satellite (Google)": "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  "Water Bodies (ESRI)": "https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/tile/{z}/{y}/{x}",
  "OpenSeaMap (Oceans)": "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
  "terrain": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  "sample2": "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
};

const LeafletMap = () => {
  const [selectedLayer, setSelectedLayer] = useState("OpenStreetMap");
  const position = [9.8436, 76.9762]; // Center of Idukki

  // Style for the Taluk boundary
  const talukStyle = {
    fillColor: "red",
    color: "red",
    weight: 2,
    fillOpacity: 0.2,
  };

  return (
    <Wrapper className="w-full h-full relative text-[#595959] dark:text-[#7d8da1] text-sm">
      {/* Dropdown for tile layer selection */}
      <select
        onChange={(e) => setSelectedLayer(e.target.value)}
        className="absolute bottom-3 left-3 z-[1000] border-2 border-color-border dark:border-none dark:bg-[#121721f5] p-2 rounded shadow-md"
      >
        {Object.keys(tileLayers).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <MapContainer center={position} zoom={10} style={{ width: "100%", height: "100%" }}>
        <TileLayer url={tileLayers[selectedLayer]} />

        {/* Highlight the Taluk using GeoJSON */}
        <GeoJSON data={idukkiTalukGeoJSON} style={talukStyle} />

        {/* Marker with the custom raingauge icon */}
        <Marker position={position} icon={rainGaugeIcon}>
          <Popup>Rain Gauge Icon</Popup>
        </Marker>
        <Marker position={[9.66722,77.09389]} icon={rainGaugeIconDiv}>
          <Popup>Rain Gauge Icon</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default LeafletMap;
