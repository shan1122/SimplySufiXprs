import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";


import * as firebase from "firebase";
import { firebaseConfig } from "./api/firebaseConfig";
import { PersistGate } from "redux-persist/integration/react";

import MainApp from "./MainApp";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp></MainApp>
      </PersistGate>
    </Provider>
  );
};
export default App;
