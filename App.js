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

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
          <FlashMessage  position="top" />
        </NavigationContainer>
      </Provider> */}
      <NavigationContainer>


      <AuthNavigator></AuthNavigator>
      </NavigationContainer>
      
    
    </View>
  );
};
export default App;
