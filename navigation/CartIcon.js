import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
function CartIcon(props) {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cartItems);
  const isCartEmpty = Boolean(cartItems.length);
  return (
    <>
      {isCartEmpty ? (
        <View
          style={[
            { padding: 5 },
            Platform.OS == "android" ? styles.iconContainer : null,
          ]}
        >
          <View
            style={{
              position: "absolute",
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: "red",
              right: 15,
              bottom: 15,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {cartItems.length}
            </Text>
          </View>

          <TouchableOpacity
            style={{ color: "white" }}
            onPress={() => navigation.navigate("cart")}
          >
            <MaterialCommunityIcons
              name="cart-outline"
              size={30}
              color={Colors.white}
              //  style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            { padding: 5 },
            Platform.OS == "android" ? styles.iconContainer : null,
          ]}
        >
          <TouchableOpacity
            style={{ color: "white" }}
            onPress={() => navigation.navigate("cart")}
          >
            <MaterialCommunityIcons
              name="cart-outline"
              size={30}
              color={Colors.white}
              //  style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
});
export default CartIcon;
