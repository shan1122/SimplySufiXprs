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
import { Form, FormField, SubmitButton,FormPicker as Picker, } from "../../components/forms";

//import AuthContext from "../auth/context";
//import authstorage from "../auth/storage";
//import AppText from "../components/AppText";
import ActivityIndicator from "../../components/ActivityIndicator";
import Colors from "../../config/Colors";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/actions/UserAction";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import { getUserInfo, registeruser } from "../../api/Functions";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Full Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  phone: Yup.string().matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,"please enter valid number").required().min(11).max(13).label("Contact Number"),
  address: Yup.string().required().label("Address"),

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


function RegisterScreen(props) {
  const disptach=useDispatch()
  const navigation = useNavigation();
  const [error, SetError] = useState(false);
  const [errordata, SetErrorData] = useState();
  const [loading, Setloading] = useState(false);

  const handleSubmit = async ({ name,email, password,phone,address,city}) => {
    console.log(name,email, password,phone,address,city.label);
    Setloading(true);
    console.log(city.label)
    console.log(email,password)
   await   firebase.auth()
      .createUserWithEmailAndPassword(email,password)
      .then(async(result) => {
        const registerThroughapi = await registeruser(email,name,phone,address,city.label)
        if(registerThroughapi.ok){
    
        if(registerThroughapi.data.error==false){
          const getdatabyemail = await getUserInfo(email);
          if(getdatabyemail.ok){

              disptach(setCurrentUser(getdatabyemail.data.user));
          }


        }
        else{
          SetError(true)
          SetErrorData(registerThroughapi.data.message);
          
        }
        
        }
        else{
          SetError(true)
          SetErrorData(registerThroughapi.problem);
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
          <ScrollView>
          <View style={styles.formstyle}>
            <Form
              initialValues={{ name: "",
              email: "",
              address: "",
              phone: "",
              city: "",}}
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
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <FormField
              icon="phone"
              name="phone"
              placeholder="Contact Number"
              keyboardType="numeric"
            />
             <Picker
              items={data}
              name="city"
              numberOfColumns={1}
              PickerItemComponent={CategoryPickerItem}
              placeholder="Choose City"
              width="94%"
            />
            <FormField icon="home" name="address" placeholder="Address" />
              <SubmitButton title="Register" />
            </Form>
          </View>
          </ScrollView>
          
         
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

export default RegisterScreen;
