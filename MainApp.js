import React, { useEffect, useState } from "react";
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
import { Drawer } from "react-native-paper";





const MainApp = () => {
  const [user,SetUser]=useState(null);

  const User = useSelector((state) => state.user);


  useEffect(() => {
    // Update the document title using the browser API
    SetUser(User.currentUser)
   // console.log(user)
  },[ useSelector((state) => state.user)]);
  // console.log(User.currentUser)

  return (

      
        <NavigationContainer>
               <FlashMessage  position="top" /> 
        
            { user ? <DrawerNavigator></DrawerNavigator> : <AuthNavigator></AuthNavigator>}
       {/* <DrawerNavigator></DrawerNavigator> */}
         
        </NavigationContainer>
      

    
  
  );
};
export default MainApp;
