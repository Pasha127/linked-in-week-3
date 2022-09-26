import { initialState } from "../store/store";
import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../actions/actions";
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_UP:
        return {
          ...state,
          users: [...state.user.users, action.payload]         
        };        
      case SIGN_IN:
        return {
          ...state,
          user:{...state.user,
          activeUser: action.payload  }        
        };       
      case SIGN_OUT:
        return {
          ...state,
          activeUser: {}          
        };       
      
      default:
        return state; 
    }
  };
export default userReducer;