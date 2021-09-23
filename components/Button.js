import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../config/Colors";

function AppButton({ title, onPress, color="primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    marginHorizontal:10
  },
  text: {
    color: Colors.white,
    fontSize: 18,
   // textTransform: "uppercase",
   // fontWeight: "bold",
  },
});

export default AppButton;
