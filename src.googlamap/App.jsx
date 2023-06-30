import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { GoogleMap, Marker } from "@react-google-maps/api"
import googlemap from "./component/googlemaps";
const App = () => {
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  useEffect(() => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom,
      center,
    });
    const marker = new google.maps.Marker({
      position: center,
      map,
    });
    return () => {
      map.remove();
    };
  }, [zoom, center]);
  return (
    <div>
      <GoogleMap
        id="map"
        zoom={zoom}
        center={center}
        onZoomChanged={setZoom}
        onCenterChanged={setCenter}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
