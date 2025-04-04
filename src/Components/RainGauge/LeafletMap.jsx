import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useState } from "react";
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper";
import ReactDOMServer from "react-dom/server";
import RaingaugeContext from "../Contexts/RaingaugeContext/RaingaugeContext";

const tileLayers = {
  "OpenStreetMap": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "Satellite (Google)": "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  "terrain": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
};

const RainGaugeIcon = ({ color, value }) => {
  console.log(value, color)
  const formattedValue = parseInt(value) 
  const count = (formattedValue/250)*100

  return (
  <Wrapper className='size-9 grid place-items-center'>
            <Wrapper
                className='relative size-9 rounded-full grid place-items-center before:content-[""] before:absolute before:h-[70%] before:w-[70%] before:bg-[#ffffff] before:rounded-full'
                style={{
                    background: `conic-gradient(${color} ${count * 3.6}deg, #7d8da2af ${count * 3.6}deg)`
                }}
            >
                <Wrapper className={`text-black font-normal relative text-[9px]`}>{formattedValue}</Wrapper>
            </Wrapper>
        </Wrapper>
  )
}

const LeafletMap = () => {
  const { raingaugeData } = useContext(RaingaugeContext);
  const [selectedLayer, setSelectedLayer] = useState("OpenStreetMap");
  const position = [9.8436, 76.9762];

  const getLatestReading = (readings) => {
    if (!readings?.length) return null;
    return readings.sort((a, b) => 
      new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`)
    )[0];
  };

  const getColorStatus = (value, thresholds) => {
    const val = parseFloat(value);
    if (val >= thresholds.red) return "#ff0d3e";    // Red
    if (val >= thresholds.orange) return "#fd7418"; // Orange
    if (val >= thresholds.yellow) return "#c2c200"; // Yellow
    return "#66ff66";                               // Blue
  };

  return (
    <Wrapper className="w-full h-full relative text-[#595959] dark:text-[#7d8da1] text-sm">
      <select
        onChange={(e) => setSelectedLayer(e.target.value)}
        className="absolute bottom-3 left-3 z-[1000] border-2 border-color-border dark:border-none dark:bg-[#121721f5] p-2 rounded shadow-md"
      >
        {Object.keys(tileLayers).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      <MapContainer center={position} zoom={10} style={{ width: "100%", height: "100%" }}>
        <TileLayer url={tileLayers[selectedLayer]} />
        {/* <GeoJSON data={idukkiTalukGeoJSON} style={talukStyle} /> */}

        {raingaugeData?.map((station) => {
          const lat = parseFloat(station.latitude);
          const lng = parseFloat(station.longitude);
          const latest = getLatestReading(station.raingauge_data);
          
          if (!latest || isNaN(lat) || isNaN(lng)) return null;

          const color = getColorStatus(latest.value, {
            red: parseFloat(station.red_level),
            orange: parseFloat(station.orange_level),
            yellow: parseFloat(station.yellow_level)
          });

          const gaugeIcon = L.divIcon({
            html: ReactDOMServer.renderToStaticMarkup(
              <RainGaugeIcon color={color} value={latest.value} />
            ),
            className: "rain-gauge-marker",
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -25]
          });

          return (
            <Marker
              key={station.id}
              position={[lat, lng]}
              icon={gaugeIcon}
            >
              <Popup>
                <div className="min-w-[180px] p-2">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {station.station_name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600">Current:</span>
                      <span className="font-semibold text-blue-600">
                        {parseFloat(latest.value).toFixed(1)} mm
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className="font-semibold" style={{ color }}>
                        {color === "#ff0d3e" ? "Red" : 
                         color === "#fd7418" ? "Orange" :
                         color === "#c2c200" ? "Yellow" :"Green"}
                      </span>
                    </div>
                    <div className="col-span-2 text-sm text-gray-500">
                      Last updated: {new Date(`${latest.date}T${latest.time}`).toLocaleString()}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Wrapper>
  );
};

export default LeafletMap;