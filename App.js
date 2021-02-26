import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "C:/Users/shrey/FreightApp/pages/home.js";
import Main from "C:/Users/shrey/FreightApp/pages/main.js";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
// import { createStackNavigator } from 'react-navigation-stack'
// // import Navigator from './routes/homeStack'

// const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <Navigator /> */}
      {/* <Home /> */}
      {/* <HomeMap/> */}
      {/* <FindPlaces /> */}
      {/* <Main/> */}
      {/* <Booking origin={"Bangalore"} destination={"Mysore"} /> */}
    </View>


      {/* <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}
        >
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"Main"} component={Main} />
          <Stack.Screen name={"HomeMap"} component={HomeMap} />
      </Stack.Navigator>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;






