import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";
import {
  addProduct,
  removeCartItem,
  reduceCartItem,
} from "../../store/actions";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import ListItemSeparator from "../../components/ListItemSeparator";
import Colors from "../../config/Colors";

const cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  const disptach = useDispatch();
  //console.log(cartItems);

  const calculatetotalprice = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.totalprice;
      //   console.log(item.totalprice)
    });
    return totalPrice;
  };
  const handelDelete = (item) => {
    disptach(
      // removeCartItem(item)
      reduceCartItem(item)
    );
  };

  const handleReduceCartItem = (item) => {
    disptach(
      // removeCartItem(item)
      reduceCartItem(item)
    );
  };

  var product = {};
  const handleIncrementToCart = (item) => {
    product.id = item.id;
    product.quantity = 1;
    product.name = item.name;
    product.price = item.price;
    product.image = item.img;
    product.totalprice = 1 * item.price;

    //  item.push({quantity:quantity})

    //  toast.show("hello");
    disptach(addProduct(product));
  };
  const renderDeals = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onLongPress={() => {
          handelDelete(item);
        }}
      >
        <View style={styles.container}>
          <View style={styles.productContainer}>
            <Text
              style={{ fontWeight: "100", fontSize: 18, color: Colors.primary }}
            >
              {item.name}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, color: Colors.medium }}
            >
              PKR:{item.totalprice}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                //  handelDelete(item)
                handleIncrementToCart(item);
                //  console.log("plus is pressed")
              }}
            >
              <AntDesign name="pluscircleo" size={28} color={Colors.medium} />
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: Colors.medium,
                marginHorizontal: 10,
              }}
            >
              {item.quantity}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                //  handleAddToCart(item)
                handleReduceCartItem(item);
                //  console.log("minus is pressed")
              }}
            >
              <AntDesign name="minuscircleo" size={28} color={Colors.medium} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 11,
          color: "black",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        Long Press to delete Item
      </Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        //  contentContainerStyle={{ flexDirection: "row", flexWrap: "nowrap" }}
        //columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderDeals}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <ListItemSeparator></ListItemSeparator>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: Colors.medium,
          marginHorizontal: 10,
          alignSelf: "center",
        }}
      >
        Total {calculatetotalprice()}
      </Text>
      <ListItemSeparator></ListItemSeparator>
      <View style={{ marginTop: 10, marginBottom: 40 }}>
        <TouchableOpacity
          style={{
            height: 40,
            marginTop: 10,
            backgroundColor: Colors.primary,
            alignItems: "center",
            margin: 20,
            justifyContent: "center",
            borderRadius: 3,
          }}
          //  onPress={handlesubmit}
        >
          <Text style={{ color: "white" }}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  productContainer: {
    flex: 0.5,
    flexDirection: "column",
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: "row-reverse",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default cart;
