import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
  } from "react-native";

function HomeButton({name,onPress}) {
    return (
      
    
          <TouchableOpacity style={styles.item} onPress={onPress}>

            <Text style={{marginTop:"10%",alignSelf:"center"}}>{name}</Text>


          </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row' ,
      flexWrap:"wrap"
    },
    item: {
    justifyContent:"flex-start",
      width:50,
      height: 70,
      paddingHorizontal: 1,
      paddingVertical: 6,
      borderRadius: 10,
      marginTop: "10%",
      backgroundColor: "white",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "45%",
      textAlign: "center",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      
    },
        row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    
  });

export default HomeButton;