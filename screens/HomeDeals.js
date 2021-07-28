import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


function HomeDeals(props) {
 // console.log(props);
 const navigation = useNavigation();
 

  return (
    <TouchableOpacity
        
        onPress={() => {
          navigation.navigate("Product", {
            item: props,
          });
        }}
      >
    <View style={{ height:170, marginTop:10 }}>
      <View
        style={{
          height: 170,
          width: 140,
          marginLeft: 10,
          borderWidth: 0.5,
         marginBottom:0.5,
          borderColor: "#dddddd",
        }}
      >
        
        <View style={{ flex: 2 }}>
          
          <Image
            source={{ uri: props.img }}
            style={{ flex: 1.7, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 0.3, paddingLeft: 10, paddingTop: 10, backgroundColor:"black" }}>
          <Text style={{color:"white",fontSize:14}}>{props.name}</Text>
        </View>
       
      </View>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  categoryContainer: {
    //width: Dimensions.get("window").width * 0.23,
    //marginVertical: 10,
    height: 40,
    padding: 5,

    flex: 1,
    flexDirection: "row",
    //marginBottom:"10%"
  },

  categoryIcon: {
    // borderWidth: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 50,
  },
  categoryBtnTxt: {
    // alignContent:"center",
    textAlign: "center",
    // alignSelf: "center",
    // alignItems: "center",
    //alignContent: "center",
    //marginTop: 5,
    color: "black",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: 40,
    //borderRadius: 50,
  },
});
export default HomeDeals;
