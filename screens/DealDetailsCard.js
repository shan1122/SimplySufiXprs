import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Colors from "../config/Colors";
function DealDetailsCard(props) {
  // console.log(props.navigation);
  const navigation = useNavigation();
  // console.log(props)

  return (
   
      <TouchableOpacity
        
        onPress={() => {
          navigation.navigate("Product", {
            item: props,
          });
        }}
      >
        <View style={styles.categoryContainer}>
          <Image
            style={styles.img}
            source={{ uri: props.img }}
            resizeMode="cover"
          />

          <Text style={styles.categoryBtnTxt}>{props.name}</Text>
        </View>
      </TouchableOpacity>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.white,
    backgroundColor: Colors.white,
  },
  categoryContainer: {
    width: Dimensions.get("window").width * 0.3,
    backgroundColor: Colors.white,
    marginVertical: 10,
    height: null,
    padding: 5,
    //marginBottom:"10%"
  },

  categoryIcon: {
    // borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 50,
  },
  categoryBtnTxt: {
    textAlign: "center",

    color: "black",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
export default DealDetailsCard;
