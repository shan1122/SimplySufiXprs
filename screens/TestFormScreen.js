import React from "react";
import { View } from "react-native";
import { Form } from "../components/forms";
import * as Yup from "yup";
import AppEditAbleForm from "../components/forms/AppEditAbleForm";

const validationSchema = Yup.object().shape({});
function TestFormScreen(props) {
   
  return (
    <View>
      <Form
        initialValues={{
          name: "",
          email: "",
          address: "",
          phone: "",
          city: "",
        }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <AppEditAbleForm
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          val="hello"
          placeholder="Email"
          textContentType="emailAddress"
        ></AppEditAbleForm>
      </Form>
    </View>
  );
}

export default TestFormScreen;

// import React, { useState, useEffect } from "react";
// import { StyleSheet, TouchableOpacity } from "react-native";
// import * as Yup from "yup";
// import AuthContext from "../auth/context";

// import Screen from "../components/Screen";
// import AppButton from "../components/AppButton";
// import {
//   Form,
//   FormField,
//   SubmitButton,
// } from "../components/forms";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required().label("Name"),
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().min(4).label("Password"),
//   phoneNo: Yup.string()
//     .matches(
//       /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
//       "please enter valid number"
//     )
//     .required()
//     .min(11)
//     .max(11)
//     .label("Contact Number"),
// });

// function ProfileScreen() {
//   const [editable, setEditable] = useState(false);
//   const authContext = React.useContext(AuthContext);
//   console.log(authContext.user);
//   return (
//     <Screen style={styles.container}>
//       <Form
//         initialValues={{
//           name: "",
//           password: "",
//           phoneNo: "",
//           address: "",
//         }}
//         onSubmit={(values) => console.log(values)}
//         validationSchema={validationSchema}
//       >
//         <FormField
//           autoCorrect={false}
//           icon="account"
//           name="name"
//           val={authContext.user.name}
//           placeholder="Name"
//           editable={editable}
//         />
//         <FormField
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           name="password"
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//           editable={editable}
//         />
//         <FormField
//           icon="home"
//           name="address"
//           val={authContext.user.address}
//           placeholder="Address"
//           editable={editable}
//         />

//         <FormField
//           icon="phone"
//           name="phoneNo"
//           val={authContext.user.phone}
//           placeholder="Contact No"
//           editable={editable}
//         />
//         {editable ? (
//           <SubmitButton title="Update Profile" />
//         ) : (
//           <AppButton
//             title="Click to Edit"
//             color="danger"
//             onPress={() => setEditable(true)}
//           ></AppButton>
//         )}
//       </Form>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 20,
//   },
// });

// export default ProfileScreen;