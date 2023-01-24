import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useGeolocated } from 'react-geolocated';

function Maps() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
        enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    });

    const containerStyle = {
        width: '100%',
        height: '100%'
      };
      
      const center = {
        lat: coords.latitude,
        lng: coords.longitude
      };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBW5ezxxrJqLOOZryhdRU6fprDGoy7Qdqw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Maps;