import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Dimensions } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/Loading.json")}
        style={{
          width: 55,
          height: 55,
          alignSelf:"center",
          alignItems:"center",
          //  marginLeft: - 5
        }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    paddingTop:Dimensions.get("window").height/2-80,
    zIndex: 1,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default ActivityIndicator;
