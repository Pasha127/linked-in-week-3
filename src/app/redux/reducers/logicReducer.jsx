import { initialState } from "../store/store";
import { LOADING,SEARCH, LIKE, UNLIKE } from "../actions/actions";
const logicReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          logic:{...state.logicRoot.logic, 
            loading: action.payload}          
        };        
      case SEARCH:
        return {
          ...state,
          search: action.payload          
        };       
      case LIKE:
        return {
          ...state,
         liked: [...state.logic.liked, action.payload]          
        };       
      case UNLIKE:
        return {
          ...state,
         liked: state.logic.liked.filter((post) => post._id !== action.payload._id)    
        };       
      
      default:
        return state; 
    }
  };
export default logicReducer;