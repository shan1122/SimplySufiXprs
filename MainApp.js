import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import FlashMessage from "react-native-flash-message";

import AuthNavigator from "./navigation/AuthNavigator";

import { useSelector } from "react-redux";
import AppLoading from "expo-app-loading";

const MainApp = () => {
  const [user, SetUser] = useState(null);
  const [isReady,SetIsReady]=useState(false)

  const User = useSelector((state) => state.user);

    const FetchUserdata =()=>{
      
      SetUser(User.currentUser);
    }

  useEffect(() => {
    // Update the document title using the browser API
    FetchUserdata()
    // console.log(user)
  }, [useSelector((state) => state.user)]);
  // console.log(User.currentUser)
    // if(!isReady)
    //   return(
    //     <AppLoading  startAsync={FetchUserdata}
    //     onFinish={() => SetIsReady(true)}></AppLoading>
    //   )

    if(!isReady){
    return( 
      <AppLoading startAsync={FetchUserdata}  onFinish={() => SetIsReady(true)}     onError={console.warn}></AppLoading>
    )
  }
  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      {user ? (
        <DrawerNavigator></DrawerNavigator>
      ) : (
        <AuthNavigator></AuthNavigator>
      )}
    </NavigationContainer>
  );
};
export default MainApp;
