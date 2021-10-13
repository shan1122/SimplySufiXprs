import {combineReducers} from 'redux';
import cartReducer  from './reducers/cartReducer'
import userReducer from './reducers/userReducer'
import { persistReducer } from 'redux-persist'
import createSecureStore from "redux-persist-expo-securestore";
const storage = createSecureStore();
//import AsyncStorage from 'react-native-community/async-storage';
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';




export const rootReducer =  combineReducers({
    user:userReducer,
    cartItems:cartReducer
});
const configStorage = {
    key: 'root',
    storage,
  };
  
  export default persistReducer( configStorage,rootReducer);