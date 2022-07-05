import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import alluscities from "../data/alluscities.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../icons/eversidebig.png"),
  iconUrl: require("../icons/eversidesmall.png"),
  iconSize: [20, 30],

  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const TooManyMarkers = () => {
  console.log(alluscities);
  const position = [37.09024, -95.712891];

  return (
    <>
      <MapContainer
        center={position}
        zoom={4}
        scrollWheelZoom={true}
        preferCanvas
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          // url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
          // url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        {alluscities.map((city, idx) => (
          <CircleMarker center={[city.latitude, city.longitude]} key={idx}>
            <Popup>
              <b>{city.city}</b>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      ;
    </>
  );
};

export default TooManyMarkers;
