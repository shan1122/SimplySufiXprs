import React, { useState } from "react";
import { StyleSheet, Image, Text, View,TouchableOpacity } from "react-native";
import * as Yup from "yup";


import { Form, FormField, SubmitButton } from "../../components/forms";
import ActivityIndicator from "../../components/ActivityIndicator";
import Colors from "../../config/Colors";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const [error, SetError] = useState(false);
  const [errordata, SetErrorData] = useState();
  const [loading, Setloading] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <>
      <ActivityIndicator visible={loading}></ActivityIndicator>
      <View style={styles.container}>
        <View style={{ marginTop: 50,}}>
        {error && (
          <>
            <Text style={{ color: "red" }}>{errordata}</Text>
          </>
        )}
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </Form>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
   
  
    flex: 1,
    backgroundColor:Colors.primary

  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode:"contain"
  },
  BottomSection:{
    alignSelf:"center"

  }
});

export default RegisterScreen;
