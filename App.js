import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import store from "./store";
import { Dimensions, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
          <FlashMessage  position="top" />
        </NavigationContainer>
      </Provider>
    </View>
  );
};
export default App;
