import React from "react";
import { View, Text,Modal,StyleSheet,TouchableOpacity } from "react-native";
import { Form, FormField,SubmitButton } from "../../components/forms";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Checkout } from "../../api/Functions";
import { useState } from "react";
import Colors from "../../config/Colors";
import ListItemSeparator from "../../components/ListItemSeparator";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeCartItem,
  reduceCartItem,
  clearCart
} from "../../store/actions";


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Full Name"),
  email: Yup.string().required().email().label("Email"),
  phone:Yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,"please enter valid number").required().min(11).max(13).label("Contact Number"),
  address:Yup.string().required().label("Address"),



});

function CheckOut(props) {
  const disptach = useDispatch();
  const[visible,SetVisible]=useState(false);
  const [loading,setLoading]=useState(false);
  console.log(props)
  const calculatetotalprice = () => {
    let totalPrice = 0;
    let cartTotalQuantity=0;
    cartItems.map((item) => {
      totalPrice += item.totalprice;
      cartTotalQuantity+=item.quantity;
    });
    return totalPrice;
  };
  const calculateCartTotalQuantity = () => {
    let cartTotalQuantity=0;
    cartItems.map((item) => {
      cartTotalQuantity+=item.quantity;
    });
    return cartTotalQuantity;
  };
const NextPage =()=>{
  
  SetVisible(false);
  disptach(
   clearCart()
    //reduceCartItem(item)
  );
  props.navigation.navigate("Home")
//  props.navigation.pop();


}

  const cartItems = useSelector((state) => state.cartItems);
  
    const totalPrice=calculatetotalprice();
    const quantity=calculateCartTotalQuantity();
    console.log(quantity);
    // console.log(totalPrice)
    // console.log(cartItems.length)
    var product = {};
    product.products=cartItems

  const handleSubmit = async ({name,email,address,phone,comments}) => {
          SetVisible(true);
        const city="lahore"
          const CheckOutResponse = await Checkout(name,email,phone,city,address,comments,product,quantity,totalPrice)
          
    //     const response2 = await registeruser(name,email,phone,city,address,comment,cartItems);
    //     //console.log(response2);
    //     //alert(response2.data);
    //    console.log(response2.data.message);
  };

  return (
    <>
    <ScrollView>
     <View>
     <View  style={styles.centeredView}>
        <View style={styles.modalView}>
        <Modal visible={visible}>
                <View style={{ flex: 1/2, justifyContent:"center",alignItems:"center", borderRadius: 20,}}>
                    
                <Text style={styles.TextHeader}>THNAK YOU FOR ORDER</Text>
                <ListItemSeparator></ListItemSeparator>
                <View style={{margin:20}}>
                
                <Text style={styles.TextDetails}>Your order is sucessfully placed</Text>
                <Text  style={styles.TextDetails}>You will receive a confirmation email shortly containing your order number and order details</Text>
                </View>
                  <TouchableOpacity
                    style={styles.activenowbutton}
                    onPress={NextPage}
                  >
                    <Text style={styles.Buttontext}>OK</Text>
                  </TouchableOpacity>
                  
                </View>
              </Modal>
              </View>
              </View>

     </View>
    <View>
      <Form
        initialValues={{name:"",email:"",address:"",phone:"",comments:""}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Full Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField icon="home" name="address" placeholder="Address" />
        <FormField icon="phone" name="phone" placeholder="Contact Number" keyboardType="numeric" />
        <FormField
          autoCorrect={false}
         // icon="account"
          name="comments"
          placeholder="Delivery Instructions"
          
        />
        <SubmitButton title="Confirm Order" />
      </Form>
    </View>
    </ScrollView>
    </>
  );
  
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   // marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
   // borderRadius: 20,
   // padding: 35,

    //height:"%",
   // width:"100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
activenowbutton: {

    height:50,
    width: "90%",
    alignItems: "center",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  cancelbtn: {
    height:30,
    width: "50%",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  Buttontext:{
    
      color: Colors.white,
      fontWeight: "bold",
   
  },
  TextHeader:{
    
    fontWeight: "100",
     fontSize: 20, 
   //  fontWeight:"bold",
     color: Colors.primary
  },
  TextDetails:{
     fontWeight: "100", fontSize: 16, color: Colors.medium 
  }
})
export default CheckOut;
