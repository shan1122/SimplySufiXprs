// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {useLayoutEffect} from "react";

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { TouchableOpacity, View, Text, Image } from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ViewDeals from "../screens/ViewDeals";
import ListingDetailsScreen from "../components/ListingDetailsScreen";
import Colors from "../config/Colors";
import DealDetails from "../screens/DealDetails";
import ItemDetail from "../screens/ItemDetail";
import cart from "../screens/Cart/cart";
import CheckOut from "../screens/Cart/CheckOut";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary, // iOS
    elevation: 0, // Android
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: "bold",
  },

  headerTintColor: "white",
  // headerBackTitle: "Back",
};

const MainStackNavigator = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Home"){
        navigation.setOptions({tabBarVisible: true});
    }else {
        navigation.setOptions({tabBarVisible: false});
    }
}, [navigation, route]);


  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        options={({ navigation }) => ({
        
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10, color: "white" }}
              onPress={() => navigation.openDrawer()}
            >
              <MaterialCommunityIcons
                name="menu"
                size={25}
                color={Colors.white}
                //  style={styles.icon}
              />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10, color: "white" }}
              onPress={() => navigation.navigate("cart")}
            >
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color={Colors.white}
                //  style={styles.icon}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            // App Logo
            <Image
              style={{
                width: 100,
                height: 40,
                backgroundColor: "transparent",
                alignSelf: "center",
                alignContent: "center",
              }}
              source={require("../assets/logoXprs.png")}
              resizeMode="contain"
            />
          ),
          headerTitleStyle: { flex: 1, textAlign: "center" },
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        })}
        component={Home}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="cart" component={cart} />
      <Stack.Screen name="View Deals" component={ViewDeals} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
      <Stack.Screen name="DealDetails" component={DealDetails} />
      <Stack.Screen name="Product" component={ItemDetail} />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        
      
      />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10, color: "white" }}
              onPress={() => navigation.openDrawer()}
            >
              <MaterialCommunityIcons
                name="menu"
                size={25}
                color={Colors.white}
                //  style={styles.icon}
              />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10, color: "white" }}
              onPress={() => navigation.openDrawer()}
            >
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color={Colors.white}
                //  style={styles.icon}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            // App Logo
            <Image
              style={{
                width: 100,
                height: 40,
                backgroundColor: "transparent",
                alignSelf: "center",
                alignContent: "center",
              }}
              source={require("../assets/logoXprs.png")}
              resizeMode="contain"
            />
          ),
          headerTitleStyle: { flex: 1, textAlign: "center" },
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        })}
        component={Contact}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };
