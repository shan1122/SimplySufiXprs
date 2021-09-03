import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import { WebView } from "react-native-webview";
import ActivityIndicator from "../components/ActivityIndicator";
import Colors from "../config/Colors";

function SupportScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
      <>
      <ActivityIndicator visible={!isLoaded}></ActivityIndicator>
    <View style={{ flex: 1 }}>
      {/* {!isLoaded && (
        <View style={styles.loader}>
        <ActivityIndicator visible={true}></ActivityIndicator>
        </View>
      )} */}
      <WebView
        onLoad={() => setIsLoaded(true)}
        source={{
          uri: "https://www.simplysufixprs.net/chatraforsufireward",
        }}
        style={{ flex: 1 }}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default SupportScreen;