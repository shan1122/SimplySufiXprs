import React from "react";
import { View, Text } from "react-native";
import { Form, FormField,SubmitButton } from "../../components/forms";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Checkout } from "../../api/Functions";


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Full Name"),
  email: Yup.string().required().email().label("Email"),
  phone:Yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,"please enter valid number").required().min(11).max(13).label("Contact Number"),
  address:Yup.string().required().label("Address"),



});

function CheckOut(props) {
  const calculatetotalprice = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.totalprice;
    });
    return totalPrice;
  };

  const cartItems = useSelector((state) => state.cartItems);
  
    const totalPrice=calculatetotalprice();
    // console.log(totalPrice)
    // console.log(cartItems.length)
    var product = {};
    product.products=cartItems
    console.log(product)
  const handleSubmit = async ({name,email,address,phone,comments}) => {
   
        const city="lahore"
          const CheckOutResponse = await Checkout(name,email,phone,city,address,comments,product,cartItems.length,totalPrice)
          console.log(CheckOutResponse)
    //     const response2 = await registeruser(name,email,phone,city,address,comment,cartItems);
    //     //console.log(response2);
    //     //alert(response2.data);
    //    console.log(response2.data.message);
  };

  return (
    <ScrollView>
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
  );
}

export default CheckOut;
