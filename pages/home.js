import React from "react";
import { Text, View, Image } from "react-native";

// import HomeMap from '../components/HomeMap/index.js';
import RaspberryStrip from "../components/RaspberryStrip";
import SearchBar from "../components/SearchBar";
// import Carousel from "../components/Carousel";
// import HomeSearch from '../../components/HomeSearch';
// import taxiimg from './../assets/taxiimg.jpg'; 
// import {dummyData} from '../data/Data'
// import Video from 'react-native-video';


const Home = (props) => {
  return (
    <View>
        <SearchBar />
        <Text>Yoyoyo</Text>
       {/* <View style={{height: Dimensions.get('window').height - 400}}> */}
         {/* <HomeMap /> */}
       {/* </View>  */}
      {/* <Carousel data={dummyData}/> */}
      {/* <Image source={taxiimg} style={{ width: 305, height: 159 }} />  */}
        <RaspberryStrip />
      
      {/*  Bottom Comp*/}

    </View>
  );
};

export default Home;


