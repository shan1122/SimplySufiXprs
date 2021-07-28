import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Colors from "../config/Colors";
import { TouchableOpacity,TouchableWithoutFeedback} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Deals(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("Product", {
        item: props,
      });
    }}
    
    >
    <View style={styles.dealsContainer}>
      <View style={styles.dealImgContainer}>
        <Image source={{ uri: props.img }} style={styles.dealImage}></Image>
      </View>
      <View style={styles.dealDetailContainer}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            fontWeight: "bold",
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
          }}
        >
        {}
        </Text>
        <View style={{flex:1,flexDirection:'column-reverse'}}>

               <View>
        <TouchableOpacity
          style={{
            height: 40,
            marginTop: 10,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
          }}
        >
          <Text style={{ color: "white" }}>Add To cart</Text>
        </TouchableOpacity>
      </View> 

        </View>
      </View>
    
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  dealsContainer: {
    flex: 1,
    flexDirection: "row",
    height: 200,
    backgroundColor: "white",
    borderWidth: 20,
    borderColor: "white",
  },
  dealImgContainer: {
    flex: 0.6,
    flexDirection: "column",
  },
  dealDetailContainer: {
    paddingLeft: 20,
    // borderWidth:10,

    flex: 1 / 2,
    flexDirection: "column",
  },
  dealImage: {
    width: "100%",
    height: "100%",
  },
});
export default Deals;
