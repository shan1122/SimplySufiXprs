import React from 'react';
import { TouchableOpacity, View, Text, Image } from "react-native";

const HeaderLogo = () => {
    return (
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
    );
}

export default HeaderLogo;