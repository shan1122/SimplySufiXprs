import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Colors from "../config/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
// ./navigation/TabNavigator.js

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"  
    tabBarOptions={{
      activeTintColor: Colors.primary,
     // inactiveTintColor: 'lightgray',
      //activeBackgroundColor: '#c4461c',
      //inactiveBackgroundColor: '#b55031',
          // style: {
          //       backgroundColor: '#CE4418',
          //       paddingBottom: 2
          // }
   }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} 
      
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={26} />
          
        ),
      }}
      
      />
      <Tab.Screen name="Deals" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;