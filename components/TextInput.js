import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import Colors from "../config/Colors";

function AppTextInput({ icon, width = "98%", ...otherProps }) {
  return (
    <View style={[styles.container ]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.Colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "black",
    borderWidth:1,
    borderColor:Colors.primary,
    borderRadius:4,
    flexDirection: "row",
    padding: 15,
    marginVertical: 8,
    width: Dimensions.get("window").width -20,
    marginLeft:10,
    
    
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
