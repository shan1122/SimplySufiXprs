import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import Colors from "../config/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import * as Linking from "expo-linking"

const Locationdata=[{
  id:"1",
  long:"31.4667177",
  lat:"74.2661364",
  From:"9am",
  To:"6pm",
  phone:"042-1929392323",
  Address:"23 ammanh mall Lahore"
},

{
  id:"3",
  long:"31.4667177",
  lat:"74.2661364",
  From:"9am",
  To:"6pm",
  phone:"042-1929392323",
  Address:"23 ammanh mall Lahore"
},
{
  id:"2",
  long:"31.4667177",
  lat:"74.2661364",
  From:"9am",
  To:"6pm",
  phone:"042-1929392323",
  Address:"23 ammanh mall Lahore"
},

];
const renderItem=( { item })=>{
  
const HandlePhone=()=>{
  Linking.openURL(`tel:${item.phone}`)
}
const HandleMap=()=>{
  
  //openGps(lat,lng);

  var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
  var url = scheme + `${item.lat},${item.long}`;
  Linking.openURL(url);

}
return (
<View style={styles.container}>
<View style={styles.innerContainer}>
  <View style={styles.OpeningTimings}>
    <Text style={styles.TextHeading}>
      OpeningTimings: From {item.From} to {item.To} 
    </Text>
  </View>
  <View style={styles.PhoneNumber}>
    <Text style={styles.PhoneHeadingText}>{item.phone}</Text>
  </View>
  <View style={styles.Address}>
    <Text style={styles.AddressText}>{item.Address}</Text>
  </View>
</View>
<View style={styles.backgroundMapHeader}>
  <View style={styles.grid}>
    <TouchableWithoutFeedback onPress={HandlePhone}>
      <MaterialIcons name="phone" size={24} color="white" />
    </TouchableWithoutFeedback>
  </View>
  <View style={{ flex: 0.2 }}></View>
  <View style={styles.grid}>
    <TouchableWithoutFeedback onPress={HandleMap}>
      <MaterialIcons name="location-on" size={24} color="white" />
    </TouchableWithoutFeedback>
  </View>
</View>
</View>
)



}
function LocationScreen(props) {

return(
  <FlatList
        data={Locationdata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
)



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  innerContainer: {
    marginLeft: 10,
  },
  OpeningTimings: {},
  PhoneNumber: {
    marginTop: 4,
  },
  Address: {},
  AddressText: {
    color: Colors.grey,
    fontSize: 11,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "100%",
  },
  PhoneHeadingText: {
    color: Colors.dark,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "100%",
  },
  TextHeading: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "100%",
  },
  backgroundMapHeader: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.medium,
    flexDirection: "row",
  },
  grid: {
    flex: 0.4,
    //  backgroundColor:"white"
    alignItems: "center",
    alignSelf: "center",
  },
});
export default LocationScreen;
