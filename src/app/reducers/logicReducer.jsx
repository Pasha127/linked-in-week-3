import { initialState } from "../redux/store/store";

const logicReducer = (state = initialState.logic, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: action.payload          
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
      
      default:
        return state; 
    }
  };
export default logicReducer;