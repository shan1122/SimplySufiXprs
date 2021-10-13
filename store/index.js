import createSecureStore from "redux-persist-expo-securestore";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist'
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';




//import AsyncStorage from '@react-native-async-storage/async-storage';
export const store = createStore(rootReducer,applyMiddleware(thunk))

export const persistor = persistStore(store);

export default {
  store,
  persistor
};
// const storage = createSecureStore();
//  const configStorage = {
//      key: 'root',
//      storage,
//    };
// const persistedReducer = persistReducer( configStorage , rootReducer)
 
// export default () => {
//   let store = createStore(persistedReducer,applyMiddleware(thunk))
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
