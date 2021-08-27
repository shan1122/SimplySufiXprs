import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
      <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginLeft:18,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
