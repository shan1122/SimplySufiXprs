import React from "react";
import { View, Text, StyleSheet,FlatList} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../config/Colors";
import { ScrollView } from "react-native-gesture-handler";
import ListItemSeparator from "../components/ListItemSeparator";


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
        {item.orderdate}
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
          OrderNo:{item.id}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight:"bold",
            color: Colors.medium,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
          }}
        >
          {item.orderby}
        </Text>
      </View>
      <View style={styles.orderTotalContainer}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.medium,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
          }}
        >
         {item.orderprice}
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

const data=[{
  id:"1",
  orderprice:"404",
  orderdate:"23 sep 2021",
  orderby:"zeshan"
},

  {
    id:"2",
    orderprice:"404",
    orderdate:"23 sep 2021",
    orderby:"zeshan"
  },

];



function OrderScreen(props) {



  return(
    <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
     //   numColumns={4}
       // columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderItem}
        ItemSeparatorComponent={ListItemSeparator}
      />
  )
 
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
  },
  orderStatusContainer: {
    flex: 0.5,
  },
  orderTotalContainer: {
    flex: 0.3,
  },

  emptyCartText: {
    // fontWeight: "bold",
    fontSize: 16,
    color: Colors.medium,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default OrderScreen;
