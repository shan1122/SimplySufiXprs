import React from "react";
import { View, Text } from "react-native";
import { Form, FormField,SubmitButton } from "../../components/forms";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({});

function CheckOut(props) {
 
  const handleSubmit = async ({}) => {
    //     console.log(email,password);
    //     const response2 = await registeruser(name,email,password,address,phone,location);
    //     //console.log(response2);
    //     //alert(response2.data);
    //    console.log(response2.data.message);
  };

  return (
    <ScrollView>
    <View>
      <Form
        initialValues={{}}
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
        <FormField icon="phone" name="phone" placeholder="Contact No" />
        <SubmitButton title="Confirm Order" />
      </Form>
    </View>
    </ScrollView>
  );
}

export default CheckOut;
