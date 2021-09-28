// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, LocationsStack, SupportScreenStack } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();
import DrawerContent from "../screens/DrawerContent"
import Colors from "../config/Colors";
import SupportScreen from "../screens/SupportScreen";

const DrawerNavigator = () => {
  return (
    
    <Drawer.Navigator drawerStyle={{backgroundColor:Colors.primary}}  drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="Support" component={SupportScreenStack}/>
      <Drawer.Screen name="Locations" component={LocationsStack}/>
     
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;