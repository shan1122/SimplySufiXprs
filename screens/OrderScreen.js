import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { ScrollView } from "react-native-gesture-handler";
import ListItemSeparator from "../components/ListItemSeparator";
import { getUserOrders } from "../api/Functions";
import { useSelector } from "react-redux";
import ActivityIndicator from "../components/ActivityIndicator";

const renderItem = ({ item }) => {
  
  return (
    // <View style={styles.emptyCartContainer}>

    //   <Text style={styles.emptyCartText}>Your cart is currently empty</Text>
    // </View>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.medium,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          >
            {item.date}
          </Text>
        </View>
        <View style={styles.orderStatusContainer}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.medium,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          >
            {item.oid}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.medium,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          ></Text>
        </View>
        <View style={styles.orderTotalContainer}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.medium,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          >
            {item.total_price}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const data = [
  {
    id: "1",
    orderprice: "404",
    orderdate: "23 sep 2021",
    orderby: "zeshan",
  },

  {
    id: "2",
    orderprice: "404",
    orderdate: "23 sep 2021",
    orderby: "zeshan",
  },
];

function OrderScreen(props) {
  const [userOrders, SetOrders] = useState(null);
  const [errordata, SetErrorData] = useState();
  const [loading, Setloading] = useState(false);

  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getOrders = async () => {
      Setloading(true);
      const getUserOrder = await getUserOrders(user.custid);
      //console.log(getUserOrder.data)
      if (getUserOrder.ok) {
        SetOrders(getUserOrder.data.orders);
        Setloading(false);
      }
    };

    getOrders();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator visible={loading}></ActivityIndicator>
      <View style={styles.Itemcontainer}>
        <View style={styles.dateContainer}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.white,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          >
            Date
          </Text>
        </View>
        <View style={styles.orderStatusContainer}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.white,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          >
            Order No
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Colors.white,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          ></Text>
        </View>
        <View style={styles.orderTotalContainer}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.white,
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            }}
          >
            Total Price
          </Text>
        </View>
      </View>

      <FlatList
        data={userOrders}
        keyExtractor={(item) => item.oid.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    // backgroundColor:"white"
  },
  dateContainer: {
    flex: 0.2,
    marginLeft:8
  },
  orderStatusContainer: {
    flex: 0.5,
  },
  orderTotalContainer: {
    flex: 0.3,
  },
  Itemcontainer:{
  //  flex: 1,
    flexDirection: "row",
  //  margin: 10,
 
    backgroundColor:"black"
  //  marginBottom:40,

  },

  emptyCartText: {
    // fontWeight: "bold",
    fontSize: 16,
    color: Colors.medium,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default OrderScreen;
