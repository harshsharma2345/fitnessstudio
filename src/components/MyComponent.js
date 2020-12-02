import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);

const containerStyle = {
  width: '76vw',
  height: '60vh',
  marginLeft: '0px',
  padding:'0',
  display:'flex',
  margin:'auto'
  
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};
 
function MyComponent() {
  const classes = useStyles();

  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <>
    <div className={classes.section} >
      <h2 className={classes.title}>Locate us</h2>
      </div>
      
    <LoadScript
      googleMapsApiKey="AIzaSyDK-wSmqGVuHVdKm-zCp_oeDWmlYWrqMJs"
    >
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
    </LoadScript>
    
    </>
  )
}
 
export default React.memo(MyComponent)