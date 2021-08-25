import React from 'react';
import { TouchableOpacity, View, Text, Image } from "react-native";

const HeaderLogo = () => {
  
    return (
      
      <View style={{flex: 1,alignContent:"center",alignSelf:"center"}}> 
        <Image
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          alignSelf: "center",
          alignContent: "center",
        }}
        source={require("../assets/logoXprs.png")}
        resizeMode="contain"
      />
      </View>
    )
}

export default HeaderLogo;