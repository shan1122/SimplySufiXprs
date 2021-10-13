import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import Colors from "../config/Colors";

function TextInputApp({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={Colors.dark}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    //marginHorizontal:,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    padding: 15,
 
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInputApp;