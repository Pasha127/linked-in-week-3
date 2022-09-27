import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import logicReducer from '../reducers/logicReducer';


const persistConfig = {
  key: 'root',
  storage
}


export const initialState = {
  logic: {search:"",liked:[],loading:true},
  user:{users:[],activeUser:{},friends:[]}
} 

const bigReducer = combineReducers({
  userRoot: userReducer,
  logicRoot: logicReducer
  });

const persistedReducer = persistReducer(persistConfig, bigReducer)



export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store);