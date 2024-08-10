import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const restaurantIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ChangeMapView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true });
    }
  }, [center, map]);
  return null;
};

const Map = () => {
  const [inputData, setInputdata] = useState("");
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputdata(e.target.value);
  };

  const searchHandler = async () => {
    try {
      const geocodeResponse = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${inputData}&format=json`
      );

      if (geocodeResponse.data.length === 0) {
        setErrorMessage("City not found. Please try another name.");
        return;
      }

      const { lat, lon } = geocodeResponse.data[0];
      const newLat = parseFloat(lat);
      const newLon = parseFloat(lon);

      if (!isNaN(newLat) && !isNaN(newLon)) {
        setCoordinates([newLat, newLon] as [number, number]);
      } else {
        setErrorMessage("Invalid coordinates received.");
      }

      const response = await axios.get(
        `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:1000,${newLat},${newLon});out;`
      );

      setRestaurants(response.data.elements);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching data from Overpass API", error);
      setErrorMessage("An error occurred while fetching data.");
    }
  };

  return (
    <Fragment>
      <div className="">
        <div className="bg-blue-100 w-full h-[10rem] sm:h-[10rem] flex flex-col gap-4 justify-center items-center">
          <p className="text-2xl italic text-black font-semibold">
            Search your restaurants
          </p>
          <div className="flex flex-row">
            <input
              placeholder="Enter City Name"
              onChange={inputHandler}
              className="
              placeholder:font-semibold
              placeholder:italic
              sm:w-[18rem] sm:focus:w-[20rem]
              sm:focus:py-2 w-[13rem] italic text-slate-500 text-center placeholder:px-3 py-1 sm:py-1.5 rounded-xl px-4 border-2 ring-slate-600 outline-none ring-2 focus:ring-orange-400 duration-700 ease-in-out focus:w-[15rem] focus:py-[0.3rem]"
              type="text"
            />
            <button
              onClick={searchHandler}
              className="ml-2 p-1.5 sm:placeholder:text-md placeholder:text-sm rounded-full text-white border-2 px-3 bg-black border-orange-400 hover:text-black hover:bg-blue-300 hover:border-black duration-500"
            >
              Search🔎
            </button>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center w-full h-screen">
          {errorMessage && <p>{errorMessage}</p>}
          {coordinates && (
            <MapContainer
              key={`map-${coordinates.join(',')}`} // Force re-render with key
              center={coordinates}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "500px", width: "100%" }}
            >
              <ChangeMapView center={coordinates} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {restaurants.map((restaurant, index) => {
                const { lat, lon } = restaurant;
                return (
                  <Marker
                    key={index}
                    position={[lat, lon]}
                    icon={restaurantIcon}
                  >
                    <Popup>
                      <strong>{restaurant.tags.name || "Unnamed Restaurant"}</strong>
                      <br />
                      Lat: {lat}, Lon: {lon}
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Map;
