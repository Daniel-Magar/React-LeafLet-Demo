import React, { useEffect, useRef } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cities from "../data/cities.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../icons/eversidebig.png"),
  iconUrl: require("../icons/eversidesmall.png"),
  iconSize: [20, 30],

  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Demo4 = () => {
  const position = [13.084622, 80.248357];

  return (
    <>
      <div>
        <MapContainer center={position} zoom={4}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city, idx) => (
            <Marker position={[city.lat, city.lon]} key={idx}>
              <Popup>
                <b>{city.name}</b>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Demo4;
