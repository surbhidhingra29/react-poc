import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMapComp = (props) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDT7MbkFlqBBvX05rTt5V1gN2JcGksRNoc"
    })

     return isLoaded ? (
        <GoogleMap
            mapContainerClassName='styleMapContainer'
            center={props.geoCoordinates}
            zoom={1}>
          <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapComp);
