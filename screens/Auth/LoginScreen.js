import React, { useState } from "react";
import { StyleSheet, Image, Text, View,TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

// import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
//import AuthContext from "../auth/context";
//import authstorage from "../auth/storage";
//import AppText from "../components/AppText";
import ActivityIndicator from "../../components/ActivityIndicator";
import Colors from "../../config/Colors";




const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const navigation = useNavigation();
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
        <Image style={styles.logo} source={require("../../assets/logoXprs.png")} />
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
        <View><TouchableOpacity
            style={{
              height: 50,
              marginTop: 10,
              backgroundColor: Colors.facebook,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              marginBottom:40,
            }}
          //  onPress={handlesubmit}
          >
            <Text style={{ color: "white" }}>Login With FaceBook</Text>
          </TouchableOpacity></View>
        <View style={styles.BottomSection}>
          <View>
          <Text style={{color:"white"}}>Forget Password?</Text>
          </View>
          <View style={{flex:1,flexDirection:"row"}}>
          <Text style={{ color: "white" }}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Register")
          }}><Text style={{ color: "white" }}>Sign Up</Text></TouchableOpacity>
          
          </View>
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

export default LoginScreen;
