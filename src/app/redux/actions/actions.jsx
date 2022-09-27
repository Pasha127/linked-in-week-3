export const LOADING = " LOADING";
export const SEARCH = "SEARCH";
 export const LIKE = " LIKE";
export const UNLIKE = "UNLIKE";
export  const SIGN_UP = "SIGN_UP";
export  const SIGN_IN = "SIGN_IN";
export  const SIGN_OUT = "SIGN_OUT";
export  const GET_FRIENDS = "GET_FRIENDS";

export const setLoading =isLoading =>({
    type:LOADING,
    payload: isLoading
  });
export const setSearch =query =>({
    type:SEARCH,
    payload: query
  });
export const setLike =post =>({
    type:LIKE,
    payload: post
  });
export const setUnLike =post =>({
    type:UNLIKE,
    payload: post
  });
export const setSignUp =person =>({
    type:SIGN_UP,
    payload: person
  });
export const setSignIn =person =>({
    type:SIGN_IN,
    payload: person
  });
export const setSignOut =person =>({
    type:SIGN_OUT,
    payload: person
  });
export const setFriends =people =>({
    type: GET_FRIENDS,
    payload: people
  });
  
export const handleFetchWithThunk = (id) => {

    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
            
        }
    };
    
   
  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/profile/'
  console.log("1 think")
  return async (dispatch, getState)=>{
    try {
      console.log("2 thank",baseEndpoint+id)
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint + id, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setSignIn(data))
       console.log("thick n THunky",data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{console.log("3 thunk");dispatch(setLoading(false));}
  }} 
export const getFriendsWithThunk = () => {

    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
            
        }
    };
    
   
  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/profile/'
  console.log("1 think")
  return async (dispatch, getState)=>{
    try {
      console.log("2 thank",baseEndpoint)
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setFriends(data))
       console.log("so manyfriends!",data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{console.log("3 thunk");dispatch(setLoading(false));}
  }} 