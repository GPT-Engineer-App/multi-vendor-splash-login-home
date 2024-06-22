import React, { useState, useCallback, useRef } from 'react';
import { Box, Input, VStack } from '@chakra-ui/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  height: '400px',
  width: '100%',
};
const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const SearchFragment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  const handleSearch = useCallback(() => {
    const service = new window.google.maps.places.PlacesService(mapRef.current);
    const request = {
      query: searchTerm,
      fields: ['name', 'geometry'],
      locationBias: { lat: 40.712776, lng: -74.005974 },
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const newMarkers = results.map((place) => ({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }));
        setMarkers(newMarkers);
      }
    });
  }, [searchTerm]);

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Search for malls in NYC"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={libraries}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          onLoad={(map) => (mapRef.current = map)}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      </LoadScript>
    </VStack>
  );
};

export default SearchFragment;