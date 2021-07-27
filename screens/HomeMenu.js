import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
function HomeMenu(props) {
//  console.log(props.navigation);
   const navigation=useNavigation();

  return (
    <TouchableOpacity
      
      onPress={()=>{
        navigation.navigate("DealDetails",{

          item:props.products
        })
          

      }
        
      }
     
    >
      <View style={styles.categoryContainer}>
      <View style={styles.categoryIcon}>
        <Image
          style={styles.img}
          source={{ uri: props.img }}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.categoryBtnTxt}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  categoryContainer: {
    width: Dimensions.get("window").width * 0.23,
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
    width: 60,
    height: 50,
    borderRadius: 50,
  },
});
export default HomeMenu;
