import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const sixthmain = [
  [12.9255843, 77.6309895],
  [12.9234622, 77.6318786],
  [12.9240022, 77.6318321],
  [12.9448232, 77.6222596],

  [12.9523897, 77.6157323],
];
const Demo3 = () => {
  const koraCenter = [12.9255843, 77.6309895];

  const zoom = 13;
  return (
    <>
      <div>
        <MapContainer center={koraCenter} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />

          <Polygon positions={sixthmain} color="red" weight={5} opacity={0.8} />
        </MapContainer>
      </div>
    </>
  );
};

export default Demo3;
