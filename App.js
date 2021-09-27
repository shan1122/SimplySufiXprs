import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import store from "./store";
import MenuScreen from "./screens/MenuScreen";
import { Dimensions, View } from "react-native";
import LoginScreen from "./screens/Auth/LoginScreen";
import AuthNavigator from "./navigation/AuthNavigator";
import * as firebase from "firebase";
import { firebaseConfig } from "./api/firebaseConfig";
import { useSelector } from "react-redux";
import MainApp from "./MainApp";
import LocationScreen from "./screens/LocationScreen";






      if(firebase.apps.length === 0){
      
       
        firebase.initializeApp(firebaseConfig);
      }


const App = () => {

 
  return (

      <Provider store={store}>
        
         {/* <MainApp></MainApp> */}
         <LocationScreen></LocationScreen>
     
      </Provider>

    
  
  );
};
export default App;
