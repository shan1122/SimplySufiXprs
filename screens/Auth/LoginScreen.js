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
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/actions/UserAction";
import {getUserInfo } from "../../api/Functions"


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const disptach=useDispatch()
  const navigation = useNavigation();
  const [error, SetError] = useState(false);
  const [errordata, SetErrorData] = useState();
  const [loading, Setloading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    //console.log(email, password);
    Setloading(true);
    console.log(email,password)
 await   firebase.auth()
      .signInWithEmailAndPassword(email,password)
      .then( async(result) => {
        //console.log(result.user);
        const getdatabyemail = await getUserInfo(email);
        if(getdatabyemail.ok){
          console.log(getdatabyemail.data.user)
            disptach(setCurrentUser(getdatabyemail.data.user));
        }
       
      })
      .catch((error) => {
        SetError(true);
        console.log(error)
      // var errors= JSON.stringify(error)
        SetErrorData(error.message);
       
      });
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
          <View>
            <TouchableOpacity
              style={{
                height: 50,
                //marginTop: 10,
                marginHorizontal: 18,
                backgroundColor: Colors.facebook,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                marginBottom: 40,
              }}
              //  onPress={handlesubmit}
            >
              <Text style={{ color: "white" }}>Login With FaceBook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BottomSection}>
            <View>
              <Text style={{ color: "white" }}>Forget Password?</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ color: "white" }}>
                Don't have an account yet?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text style={{ color: "white" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
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

export default LoginScreen;
