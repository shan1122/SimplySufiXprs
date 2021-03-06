import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import {
  Form,
  FormField,
  SubmitButton,
  FormPicker as Picker,
} from "../../components/forms";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as Yup from "yup";

import { Checkout } from "../../api/Functions";
import { useState } from "react";
import Colors from "../../config/Colors";
import ListItemSeparator from "../../components/ListItemSeparator";
import { clearCart } from "../../store/actions";
import ActivityIndicator from "../../components/ActivityIndicator";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import AppEditAbleForm from "../../components/forms/AppEditAbleForm";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Full Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "please enter valid number"
    )
    .required()
    .min(11)
    .max(13)
    .label("Contact Number"),
  address: Yup.string().required().label("Address"),
  //city.label:Yup.string().required().label("city")
});

const data = [
  {
    label: "Lahore",
    value: 1,
  },
  {
    label: "Islamabad",
    value: 2,
  },
];

function CheckOut(props) {
  var orderids;
  const disptach = useDispatch();
  const [visible, SetVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, SetOrderid] = useState();
  const [error, Seterror] = useState(false);
  const [errordata, SetErrorData] = useState(null);

  //console.log(props)
  const calculatetotalprice = () => {
    let totalPrice = 0;
    let cartTotalQuantity = 0;
    cartItems.map((item) => {
      totalPrice += item.totalprice;
      cartTotalQuantity += item.quantity;
    });
    return totalPrice;
  };
  const calculateCartTotalQuantity = () => {
    let cartTotalQuantity = 0;
    cartItems.map((item) => {
      cartTotalQuantity += item.quantity;
    });
    return cartTotalQuantity;
  };
  const NextPage = () => {
    SetVisible(false);
    disptach(clearCart());
    props.navigation.navigate("Home");
  };

  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  const totalPrice = calculatetotalprice();
  const quantity = calculateCartTotalQuantity();
  var product = {};
  product.products = cartItems;

  const handleSubmit = async ({
    name,
    email,
    address,
    phone,
    comments,
    city,
  }) => {
    setLoading(true);
    //console.log(city.label)
    const CheckOutResponse = await Checkout(
      user.custid,
      name,
      email,
      phone,
      city.label,
      address,
      comments,
      product,
      quantity,
      totalPrice
    );
    if (CheckOutResponse.ok) {
      // console.log(CheckOutResponse.data)
      Seterror(false);
      orderids = CheckOutResponse.data.order_id;
      SetOrderid(CheckOutResponse.data.order_id);
      setLoading(false);
      SetVisible(true); 
      SetErrorData(null);
    } else {
      Seterror(true);
      SetErrorData(CheckOutResponse.problem);
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading}></ActivityIndicator>
      <ScrollView>
        <View>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Modal visible={visible}>
                <View
                  style={{
                    flex: 1 ,
                     justifyContent: "center",
                     alignItems: "center",
                    // borderRadius: 20,
                  }}
                >
                  <Text style={styles.TextHeader}>THNAK YOU FOR ORDER</Text>
                  <ListItemSeparator></ListItemSeparator>
                  <View style={{ margin: 20 }}>
                    <Text style={styles.TextDetails}>
                      Your order is sucessfully placed
                    </Text>
                    <Text style={styles.TextDetails}>
                      You will receive a confirmation email shortly containing
                      your order number and order details
                    </Text>
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
        <View style={styles.FormStyle}>
          {error && (
            <>
              <Text style={{ color: "red" }}>{errordata}</Text>
            </>
          )}

          <Form
            initialValues={{
              name: "",
              email: "",
              address: "",
              phone: "",
              comments: "",
              city: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppEditAbleForm
              autoCorrect={false}
              icon="account"
              name="name"
              val={""+user.firstname}
              editable={false}
              placeholder="Full Name"
            />
            <AppEditAbleForm
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
              val={""+user.email}
              editable={false}
            />
            <Picker
              items={data}
              name="city"
              numberOfColumns={1}
              PickerItemComponent={CategoryPickerItem}
            //  placeholder="Choose City"
              placeholder={""+user.city}
              width="94%"
              
            />
            <AppEditAbleForm icon="home" name="address" placeholder="Address" val={""+user.address1} />
            <AppEditAbleForm
              icon="phone"
              name="phone"
              placeholder="Contact Number"
              keyboardType="numeric"
              val={""+user.mobileno}
            />
            <AppEditAbleForm
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  activenowbutton: {
    height: 50,
    width: "90%",
    alignItems: "center",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  cancelbtn: {
    height: 30,
    width: "50%",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  Buttontext: {
    color: Colors.white,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  FormStyle: {
    marginLeft: 10,
  },
  TextHeader: {
    fontWeight: "100",
    fontSize: 20,
    //  fontWeight:"bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.primary,
  },
  TextDetails: {
    fontWeight: "100",
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.medium,
  },
});
export default CheckOut;