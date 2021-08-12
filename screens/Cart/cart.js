import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const cart = ({navigation}) => {
  const cartItems = useSelector((state) => state.cartItems);
  const isCartEmpty = Boolean(cartItems.length);
  const disptach = useDispatch();
  //console.log(cartItems);
 // console.log(navigation)
  
  const calculatetotalprice = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.totalprice;
    });
    return totalPrice;
  };
  const handelDelete = (item) => {
    disptach(
      removeCartItem(item)
      //reduceCartItem(item)
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
    //console.log(item);
    product.id = item.id;
    product.quantity = 1;
    product.name = item.name;
    product.price = item.price;
    product.image = item.img;
    product.totalprice = 1 * item.price;
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
        <View style={styles.cartImgContainer}>
            <Image
            source={{
              uri:item.image
            }}
            style={styles.cartimgsize}
            resizeMode="contain"
          ></Image>

            </View>
          <View style={styles.productContainer}>
           
            <Text
              style={{ fontWeight: "100", fontSize: 18, color: Colors.primary }}
            >
              {item.name}
            </Text>
            <Text
              style={{ fontWeight: "100", fontSize: 16, color: Colors.medium }}
            >
              {item.price}X{item.quantity}
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, color: Colors.medium }}
            >
              PKR {item.totalprice}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                handleIncrementToCart(item);
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
                handleReduceCartItem(item);
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
    <View style={{flex:1,backgroundColor:"white"}}>
      {!isCartEmpty ? (
        <View style={styles.emptyCartContainer}>
          <MaterialCommunityIcons
            name="cart-remove"
            size={40}
            color={Colors.medium}
            style={{ alignSelf: "center", alignItems: "center" }}
          />
          <Text style={styles.emptyCartText}>Your cart is currently empty</Text>
        </View>
      ) : (
       
        <ScrollView style={{flex: 1}}>
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
                height: 50,
                marginTop: 10,
                backgroundColor: Colors.primary,
                alignItems: "center",
                margin: 10,
                justifyContent: "center",
                borderRadius: 3,
              }}
              //  onPress={handlesubmit}
              onPress={()=>{
                navigation.navigate("CheckOut")

              }}
            >
              <Text style={{ color: "white" }}>CHECK OUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    height:70
  },
  productContainer: {
    flex: 0.5,
    flexDirection: "column",
    marginTop:6
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: "row-reverse",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    alignContent: "center",
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.3,
  },
  emptyCartText: {
   // fontWeight: "bold",
    fontSize: 16,
    color: Colors.medium,
  },
  cartImgContainer: {
    flex: 0.2,
    flexDirection: "column",
    marginRight:6,
  },
  cartimgsize:{
    width:"100%",
    height:"100%",
   
  }
});

export default cart;
