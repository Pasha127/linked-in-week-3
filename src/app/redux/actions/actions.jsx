export const LOADING = " LOADING";
export const SEARCH = "SEARCH";
 export const LIKE = " LIKE";
export const UNLIKE = "UNLIKE";
export  const SIGN_UP = "SIGN_UP";
export  const SIGN_IN = "SIGN_IN";
export  const SIGN_OUT = "SIGN_OUT";

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
  /* 
export const handleSubmitWithThunk = (q) => {
  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='
  console.log("1 think")
  return async (dispatch, getState)=>{
    try {
      console.log("2 thank",baseEndpoint,q)
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint + q + '&limit=40')
      if (response.ok) {
        const { data } = await response.json()
        dispatch(setJobs(data))
       // console.log(data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{console.log("3 thunk");dispatch(setLoading(false));}
  }} */