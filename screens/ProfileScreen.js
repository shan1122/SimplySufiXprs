import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import {
  Form,
  FormField,
  SubmitButton,
  FormPicker as Picker,
} from "../components/forms";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as Yup from "yup";

import { useState } from "react";
import Colors from "../config/Colors";

import ActivityIndicator from "../components/ActivityIndicator";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppEditAbleForm from "../components/forms/AppEditAbleForm";
import AppButton from "../components/Button";

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

function ProfileScreen(props) {
  const disptach = useDispatch();
  const [visible, SetVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, SetOrderid] = useState();
  const [error, Seterror] = useState(false);
  const [errordata, SetErrorData] = useState(null);
  const [editable, setEditable] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  
  const handleSubmit=()=>{
    
  }

  return (
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
          val={"" +user.firstname}
          editable={false}
          placeholder="Full Name"
          editable={editable}
        />
        
        <Picker
          items={data}
          name="city"
          numberOfColumns={1}
          PickerItemComponent={CategoryPickerItem}
          placeholder={""+user.city}
          width="94%"
          editable={editable}
        />
        <AppEditAbleForm
          icon="home"
          name="address"
          placeholder="Address"
          val={"" + user.address1}
          editable={editable}
        />
        <AppEditAbleForm
          icon="phone"
          name="phone"
          placeholder="Contact Number"
          keyboardType="numeric"
          val={"" + user.mobileno}
          editable={editable}
        />
       
       {editable ? (
          <SubmitButton title="Update Profile" />
        ) : (
          <AppButton
            title="Click to Edit"
            color="danger"
            onPress={() => setEditable(true)}
          ></AppButton>
        )}
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  
})
export default ProfileScreen;
