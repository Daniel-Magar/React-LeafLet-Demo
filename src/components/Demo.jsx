import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  // iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  //   iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [64, 64],
  iconUrl: require("../icons/clinic.png"),
  // shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Demo = () => {
  const position = [12.9354717, 77.6234377];

  return (
    <>
      <MapContainer center={position} zoom={400} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>This is Koramangla</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
export default Demo;
