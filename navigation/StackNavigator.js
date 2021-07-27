// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TouchableOpacity, View,Text,Image } from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ViewDeals from "../screens/ViewDeals";
import ListingDetailsScreen from "../components/ListingDetailsScreen";
import Colors from "../config/Colors";
import DealDetails from "../screens/DealDetails";
import ItemDetail from "../screens/ItemDetail";


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

// const screenOptions = {

  
//     title: 'FoodFinder',
//     headerLeft: () => (
//       <View style={{marginLeft: 10}}>
//         <Icon.Button
//           name="menu"
//           size={25}
//           //color={Colors.white}
//         //  backgroundColor={Colors.white}
//           onPress={() => navigation.openDrawer()}
//         />
//       </View>
//     ),
//     headerRight: () => (
//       <View style={{flexDirection: 'row', marginRight: 10}}>
//         <Icon.Button
//           name="search"
//           size={25}
//      //     color={Colors.white}
//        //   backgroundColor={Colors.primary}
//           //onPress={() => {}}
//         />
        
//               </View>
      
//     ),
 








// };
const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" options={({ navigation }) => ({
    //   headerLeft: () => (
    //  <TouchableOpacity
     
    //    style={{ marginLeft: 20 }}
    //    onPress={() => {
        
    //    }}
    //  >
     
    //  </TouchableOpacity>
    // ),

    headerLeft: () => (
     <TouchableOpacity
       style={{ marginLeft: 10,color:"white" }}
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
        style={{ marginRight: 10,color:"white" }}
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
     headerTitle: () => ( // App Logo
     <Image
       style={{ width:100, height: 40, backgroundColor:"transparent",alignSelf:'center',alignContent:"center"}}
       source={require('../assets/logoXprs.png')}
       resizeMode='contain'
     />
   ),
   headerTitleStyle: { flex: 1, textAlign: 'center' },
   headerShown: true,
  // headerBackTitleVisible: false,
  // title:"Sufi Rewards",
   //headerTitleAlign: "center",
   //headerTintColor: "#fff",
   headerStyle: {
     backgroundColor: Colors.primary,
     
   },
 })}
 component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="View Deals" component={ViewDeals} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
      <Stack.Screen name="DealDetails" component={DealDetails} />
      <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  );
};



const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" options={({ navigation }) => ({
    //   headerLeft: () => (
    //  <TouchableOpacity
     
    //    style={{ marginLeft: 20 }}
    //    onPress={() => {
        
    //    }}
    //  >
     
    //  </TouchableOpacity>
    // ),

    headerLeft: () => (
     <TouchableOpacity
       style={{ marginLeft: 10,color:"white" }}
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
        style={{ marginRight: 10,color:"white" }}
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
     headerTitle: () => ( // App Logo
     <Image
       style={{ width:100, height: 40, backgroundColor:"transparent",alignSelf:'center',alignContent:"center"}}
       source={require('../assets/logoXprs.png')}
       resizeMode='contain'
     />
   ),
   headerTitleStyle: { flex: 1, textAlign: 'center' },
   headerShown: true,
  // headerBackTitleVisible: false,
  // title:"Sufi Rewards",
   //headerTitleAlign: "center",
   //headerTintColor: "#fff",
   headerStyle: {
     backgroundColor: Colors.primary,
     
   },
 })}
 component={Contact} />
    </Stack.Navigator>
  );
};




export { MainStackNavigator, ContactStackNavigator };