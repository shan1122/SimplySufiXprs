import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import Colors from "../config/Colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";
//import {useToast}  from 'react-native-paper-toast';

function ItemDetail(props) {
  // toast =useToast();

  const disptach = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const counter = useSelector((state) => state.cartItems);
  const Decrement = () => {
    quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  const { item } = props.route.params;

  console.log(item);
  var product = {};
  const handlesubmit = () => {
    showMessage({
      message: "Sucess",
      description: "You have added " + item.name + "sucessfully",
      type: "success",
      floating: Platform.OS === "ios" ? false : true,
      duration: 1000,
      // floating:true,
      onHide: () => {
        product.id = item.id;
        product.quantity = quantity;
        product.name = item.name;
        product.price = item.price;
        product.image = item.img;
        product.totalprice = quantity * item.price;
        product.weight = item.weight;
        product.weight_unit = item.weight_unit;
        disptach(addProduct(product));
        props.navigation.pop();
      },
      // backgroundColor: "purple", // background color
      //color: "#606060",
    });

    // console.log(counter)
    // console.log("new array")

    // addProduct(product);
  };
  return (
    <ScrollView style={styles.contianer}>
      <View>
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
        <Text>{item.desc}</Text>
      </View>
      </View>
      {/* BUTTON CONTAINER */}


      {/* {Dummy BUton} */}
      
      <View style={styles.buttonContianer}>
        <View style={styles.button}>
          <View style={styles.Leftbutton}>
            <View style={styles.Minusbutton}>
              <TouchableOpacity onPress={Decrement}>
              <AntDesign name="minus" size={24} color="white" />
                {/* <Text style={styles.IncrementButton}>-</Text> */}
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
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <View style={styles.PlusButton}>
            <AntDesign name="plus" size={24} color="white" />
                {/* <Text style={styles.IncrementButton}>+</Text> */}
              
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Button Submit  */}
      <View style={{ marginHorizontal:20, marginTop:20 }}>
          <TouchableOpacity
            style={{
              height: 50,
              marginTop: 10,
              backgroundColor: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              marginBottom:40,
            }}
            onPress={handlesubmit}
          >
            <Text style={{ color: "white" }}>Add To cart</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
   // marginTop:StatusBar.currentHeight
   //marginTop10,
    
  //  backgroundColor: Colors.white,
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
    height: Dimensions.get("window").height * 0.5,
  },
  buttonContianer: {
    marginHorizontal: 20,
    marginTop:10,
    borderWidth:1.5,
    borderColor:Colors.grey,
    borderRadius: 3,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor:Colors.white,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    alignSelf:"center"

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

    margin: 1,
    height: 40,
    width:40,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
   // borderRadius: 5,
   // borderWidth: 0.5,
  },

  Minusbutton: {
    //height: 100,
    margin: 1,
    height: 40,
    width:40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    borderRadius: 5,
   
  },
  PlusButton: {
    // height: 100,

    marginVertical: 5,
    height: 40,
    width:40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    borderRadius: 5,
  },
  IncrementButton: {
    color: "white",
    fontSize: 40,
  },
  
});
export default ItemDetail;
