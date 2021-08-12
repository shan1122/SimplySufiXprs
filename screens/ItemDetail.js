import React, { useState } from "react";
import { Image, View, StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../config/Colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ToastProvider } from 'react-native-paper-toast';
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import { useSelector } from "react-redux";
//import {useToast}  from 'react-native-paper-toast';


  function ItemDetail(props) {
    // toast =useToast();
   

    const disptach = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const counter = useSelector((state) => state.cartItems)
    const Decrement = () => {
      quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1);
    };

    const { item } = props.route.params;
    var product ={};    
    const handlesubmit = () => {
      product.id=item.id;
      product.quantity=quantity;
      product.name=item.name;
      product.price=item.price;
      product.image=item.img;
      product.totalprice=quantity*item.price; 
      
  //  item.push({quantity:quantity})
   
        //  toast.show("hello");
        disptach(
          addProduct(product)
        )

        // console.log(counter)
        // console.log("new array")
     // props.navigation.pop();
     // addProduct(product);
      
    };
  return (
    <ScrollView style={styles.contianer}>
      <Image
        resizeMode={"cover"}
        style={styles.img}
        source={{ uri: item.img }}
      ></Image>
      <View style={styles.price}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
        <Text>PKR:{item.price}</Text>
      </View>
      <View style={styles.detailcontainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Details</Text>
        <Text>{item.discription}</Text>
      </View>
      {/* BUTTON CONTAINER */}
      <View style={styles.buttonContianer}>
        <View style={styles.button}>
          <View style={styles.Leftbutton}>
            <View style={styles.Minusbutton}>
              <TouchableOpacity onPress={Decrement}>
                <Text style={styles.IncrementButton}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.TextField}>
            <Text
              style={{ fontSize: 18, color: "black", backgroundColor: "white" }}
            >
              {quantity}
            </Text>
          </View>
          <View style={styles.Rightbutton}>
            <View style={styles.PlusButton}>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Text style={styles.IncrementButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 40 }}>
          <TouchableOpacity
            style={{
              height: 50,
              marginTop: 10,
              backgroundColor: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
            }}
            onPress={handlesubmit}
          >
            <Text style={{ color: "white" }}>Add To cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Button Submit  */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  detailcontainer: {
    paddingLeft: 20,
  },
  price: {
    padding: 20,
  },
  img: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: Dimensions.get("window").height *0.4,
  },
  buttonContianer: {
    marginHorizontal: 20,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: Colors.primary,
    //borderRadius: 2,
  },
  Leftbutton: {
    flex: 0.25,
  },
  Rightbutton: {
    flex: 0.25,
  },
  TextField: {
    flex: 0.5,

    marginTop: 10,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary,
    borderWidth: 0.5,
  },

  Minusbutton: {
    //height: 100,
    marginTop: 10,
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    //  alignContent: "center",
  },
  PlusButton: {
    // height: 100,

    marginTop: 10,
    height: 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  IncrementButton: {
    color: "white",
    fontSize: 40,
  },
});
export default ItemDetail;
