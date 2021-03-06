import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NeshanMap from "./NeshanMap";

ReactDOM.render(
  <React.StrictMode>
    <NeshanMap
      options={{
        key: "YOUR_API_KEY",
        maptype: "dreamy",
        poi: true,
        traffic: false,
        center: [35.699739, 51.338097],
        zoom: 13,
      }}
      onInit={(L, myMap) => {
        let marker = L.marker([35.699739, 51.338097])
          .addTo(myMap)
          .bindPopup("<b>Hello world!</b><br>I am a popup.");
        myMap.on("click", function (e) {
          marker.setLatLng(e.latlng);
        });

        L.circle([35.699739, 51.348097], {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.5,
          radius: 500,
        }).addTo(myMap);
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
