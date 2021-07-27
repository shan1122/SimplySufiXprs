import React from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
import Colors from '../config/Colors';
function Deals(props) {
    return (
        <View style={styles.dealsContainer}>
        <View style={styles.dealImgContainer}>
          <Image
            source={{ uri: props.img }}
            style={styles.dealImage}
          ></Image>
        </View>
        <View style={styles.dealDetailContainer}>
          <Text style={{  fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",fontWeight:"bold"}}>{props.title}</Text>
          <Text
          style={{  fontSize: 14,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",}}
          
          >4 XPRS Mayo Chicken Burgers, 4 Sufi Cola Cans </Text>
        </View>
        <View style={{marginTop:10,marginBottom:40,}}>
        <TouchableOpacity style={{ height: 40, marginTop: 10,backgroundColor:Colors.primary ,alignItems:"center",justifyContent:"center",borderRadius:3, }}>
    <Text style={{color:"white",}}>Add To cart</Text>
</TouchableOpacity>
      </View>
      </View>
        
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
    
})
export default Deals;