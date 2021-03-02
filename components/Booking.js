import React, {useState, useEffect} from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";
import {StyleSheet,Image,Text} from "react-native";
import img from 'C:/Users/shrey/FreightApp/assets/images/comfort.jpeg';
import Cars from 'C:/Users/shrey/FreightApp/components/Cars.js';

const GOOGLE_MAPS_APIKEY = "AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI";

const Booking = ({route,navigation }) => {
  // let start_lat = 0
  // let start_lng = 0
  // let end_lat = 0
  // let end_lng = 0

  const [start_lat, setStartLat] = useState(28.456312)
  const [start_lng, setStartLng] = useState(-16.252929)
  const [end_lat, setEndLat] = useState(28.450627)
  const [end_lng, setEndLng] = useState(-16.263045)

  // const { origin, destination } = route.params;
  const origin = navigation.getParam('origin')
  const destination = navigation.getParam('destination')
  const id = navigation.getParam('id')

  const originLoc = {
    latitude: origin.geometry.location.lat,
    longitude: origin.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.geometry.location.lat,
    longitude: destination.geometry.location.lng,
  };

  useEffect(() => {
    // Geocoder.init(GOOGLE_MAPS_APIKEY);
    // Geocoder.from(origin)
    //   .then((json) => {
    //     console.log("hi",start_lat,start_lng);
    //     console.log("hello",origin)
    //     var location = json.results[0].geometry.location;
    //     let start_lat = location.lat;
    //     let start_lng = location.lng;
    //     setStartLat(start_lat)
    //     setStartLng(start_lng)
    //     console.log("done",start_lat,start_lng);
    //   })
    //   .catch((error) => console.warn(error));
  
    // Geocoder.init(GOOGLE_MAPS_APIKEY);
    // Geocoder.from(destination)
    //   .then((json) => {
    //     console.log(end_lat,end_lng);
    //     console.log(destination)
    //     var location = json.results[0].geometry.location;
    //     let end_lat = location.lat;
    //     let end_lng = location.lng;
    //     setEndLat(end_lat)
    //     setEndLng(end_lng)
    //     console.log(end_lat,end_lng);
    //   })
    //   .catch((error) => console.warn(error));
  
  },[])

  return (
  <>
    <MapView
      style={{width: '100%', height: '54%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        //{this.state.latitude}
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
    <Marker
          coordinate={{latitude: 28.456312, longitude: -16.252929}}
        //   title={'Origin'}
        ></Marker>
    <Marker
          coordinate={{latitude: 28.450627, longitude: -16.263045}}
        //   title={'Origin'}
        ></Marker>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain'
            }}
            source={img}
          />  
      <Text>{start_lat} {start_lng}</Text>
      <Text>{end_lat} {end_lng}</Text> 
     <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      </MapView>
      <Text>Select Car Type</Text>
      <Text>{origin}</Text>
      <Text>{destination}</Text>
      <Cars/>
    </>
  );
};

export default Booking;



