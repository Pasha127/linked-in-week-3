import { initialState } from "../store/store";
import { LOADING,SEARCH, LIKE, UNLIKE, GET_POSTS } from "../actions/actions";
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
         liked: [...state.liked, action.payload]          
        };       
      case UNLIKE:
        return {
          ...state,
         liked: state.liked.filter((post) => post._id !== action.payload._id)    
        }; 
      case GET_POSTS:
        return{
          ...state,
          posts: action.payload
        }      
      
      default:
        return state; 
    }
  };
export default logicReducer;