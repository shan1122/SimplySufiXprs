import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

// import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
//import AuthContext from "../auth/context";
//import authstorage from "../auth/storage";
//import AppText from "../components/AppText";
import ActivityIndicator from "../../components/ActivityIndicator";
import Colors from "../../config/Colors";
import firebase from "firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});

function ForgetPassword(props) {
  const navigation = useNavigation();
  const [error, SetError] = useState(false);
  const [errordata, SetErrorData] = useState();
  const [loading, Setloading] = useState(false);

  const handleSubmit = async ({ email }) => {
    //console.log(email, password);
    Setloading(true);
    
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     SetError(true);
    //   // var errors= JSON.stringify(error)
    //     SetErrorData(error.message);
       
    //   });
      
      Setloading(false)
  };

  return (
    <>
      <ActivityIndicator visible={loading}></ActivityIndicator>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/loginbg.jpeg")}
          resizeMode="cover"
          style={styles.backgroundstyle}
        >
          <Image
            style={styles.logo}
            source={require("../../assets/logoXprs.png")}
          />
          {error && <><Text style={{ color: "red" }}>{errordata}</Text></>}
          <View style={styles.formstyle}>
            <Form
              initialValues={{ email: "",}}
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
              {/* <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              /> */}
              <SubmitButton title="Reset Password" />
            </Form>
          </View>
          
        </ImageBackground>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    //margin: 10,
    // padding: 10,
    flex: 1,
    //backgroundColor:Colors.primary
  },
  formstyle: {
    padding: 10,
  },
  backgroundstyle: {
    flex: 1,
    //width=100,
    //    height=Dimensions.get('window').height,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain",
  },
  BottomSection: {
    alignSelf: "center",
  },
});

export default ForgetPassword;
