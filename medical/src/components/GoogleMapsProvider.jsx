import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const GoogleMapsProvider = ({ Hospital }) => {
  return (
    <LoadScript
      googleMapsApiKey="5811ae8e340c4bfbaf7a731454d4eb21" // Replace with your actual API key
      libraries={libraries}
    >
      {Hospital}
    </LoadScript>
  );
};

export default GoogleMapsProvider;