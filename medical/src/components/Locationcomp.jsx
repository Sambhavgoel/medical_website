import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { TextField, Autocomplete, Box, Button } from "@mui/material";
import L from "leaflet";
import img from "../assets/placeholder.png";

// Leaflet default marker icon fix
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Locationcomp = () => {
  const [location, setLocation] = useState([28.6692, 77.4538]);
  const [hospitals, setHospitals] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const apiKey = "5811ae8e340c4bfbaf7a731454d4eb21";

  const fetchSuggestions = async (text) => {
    if (text.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const fetchHospitals = async () => {
    if (selectedCities.length === 0) {
      alert("Please select at least one city.");
      return;
    }

    let allHospitals = [];
    for (const city of selectedCities) {
      const [longitude, latitude] = city.geometry.coordinates;
      let boundingBox;

      if (city.properties.bbox && city.properties.bbox.length === 4) {
        const bbox = city.properties.bbox;
        boundingBox = `${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}`;
      } else {
        const bufferDistance = 0.1; // ~10km
        boundingBox = `${longitude - bufferDistance},${latitude - bufferDistance},${longitude + bufferDistance},${latitude + bufferDistance}`;
      }

      try {
        const apiUrl = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=rect:${boundingBox}&limit=20&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          allHospitals = [...allHospitals, ...data.features];
        }
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    }

    setHospitals(allHospitals);
  };

  const createCustomIcon = (isHospital = false) => {
    return new L.Icon({
      iconUrl: img,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
      className: isHospital ? "hospital-icon" : "city-icon",
    });
  };

  useEffect(() => {
    if (
      selectedCities.length > 0 &&
      selectedCities[0].geometry &&
      selectedCities[0].geometry.coordinates
    ) {
      setLocation([
        selectedCities[0].geometry.coordinates[1],
        selectedCities[0].geometry.coordinates[0],
      ]);
    }
  }, [selectedCities]);

  return (
    <Box className="flex h-screen">
      {/* Left Panel */}
      <Box
        style={{ backgroundColor: "#FDE49E" }}
        className="w-full sm:w-1/3 p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Search Locations
        </h2>

        <Autocomplete
          multiple
          options={suggestions}
          getOptionLabel={(option) =>
            option.properties?.formatted || "Unknown Location"
          }
          onInputChange={(event, newInputValue) => {
            setSearchText(newInputValue);
            fetchSuggestions(newInputValue);
          }}
          onChange={(event, newValue) => setSelectedCities(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Cities"
              variant="outlined"
              fullWidth
              className="mb-4"
            />
          )}
        />

        <Button
          variant="contained"
          color="primary"
          className="w-full py-3 text-white font-semibold rounded-md transition duration-300 hover:bg-blue-600"
          onClick={fetchHospitals}
        >
          Search Hospitals
        </Button>
      </Box>

      {/* Right Panel - Map */}
      <Box className="w-full sm:w-2/3">
        <MapContainer
          center={location}
          zoom={13}
          zoomControl={false}
          style={{ height: "100%", width: "100%", zIndex: "0" }}
          key={location.join(",")}
        >
          <ZoomControl position="topright" />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* City Markers */}
          {selectedCities.map((city, index) => (
            <Marker
              key={city.properties.place_id || index}
              position={[
                city.geometry.coordinates[1],
                city.geometry.coordinates[0],
              ]}
              icon={createCustomIcon(false)}
            />
          ))}

          {/* Hospital Markers */}
          {hospitals.map((hospital, index) => (
            <Marker
              key={hospital.properties.place_id || index}
              position={[
                hospital.geometry.coordinates[1],
                hospital.geometry.coordinates[0],
              ]}
              icon={createCustomIcon(true)}
            >
              <Tooltip direction="top" offset={[0, -10]} permanent>
                <span>
                  <strong>
                    {hospital.properties.name || "Unknown Hospital"}
                  </strong>
                </span>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default Locationcomp;
