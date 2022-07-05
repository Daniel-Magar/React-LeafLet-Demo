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

  // function to find displacement between two points on map
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  useEffect(() => {
    let distance = getDistanceFromLatLonInKm(
      12.9354717,
      77.6234377,
      12.9323813,
      77.6339702
    ).toFixed(1);
    console.log(`${distance} km`);
  }, []);

  const locationonclick = (position) => {
    console.log("hello marker", position);
  };
  return (
    <>
      <div>
        <MapContainer center={position} zoom={4}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city, idx) => (
            <Marker
              position={[city.lat, city.lon]}
              key={idx}
              eventHandlers={{
                click: (e) => {
                  locationonclick(e.latlng);
                },
              }}
            >
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
