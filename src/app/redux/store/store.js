import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../../features/counter/counterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage
}


export const initialState = {
  logic: {search:"",liked:[],loading:false},
  user:{users:[],activeUser:{id:"",pass:""}}
} 

const bigReducer = combineReducers({
  user: userReducer,
  logic: logicReducer
  });



const persistedReducer = persistReducer(persistConfig, bigReducer)



export const store = configureStore({
  reducer: bigReducer,
  devTools: process.env.NODE_ENV !== 'production',
})
