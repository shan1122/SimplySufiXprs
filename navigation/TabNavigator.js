import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Colors from "../config/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
// ./navigation/TabNavigator.js

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"  
    tabBarOptions={{
      activeTintColor: Colors.primary,
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
      <Tab.Screen name="Deals" component={ContactStackNavigator}
         options={{
          tabBarLabel: 'Deals',
          tabBarColor: '#FF6347',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="fastfood" size={24} color={color} />
            
          ),
        }}
        
      
      
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;