export const LOADING = " LOADING";
export const SEARCH = "SEARCH";
export const LIKE = " LIKE";
export const UNLIKE = "UNLIKE";
export  const SIGN_UP = "SIGN_UP";
export  const SIGN_IN = "SIGN_IN";
export  const SIGN_OUT = "SIGN_OUT";
export  const GET_FRIENDS = "GET_FRIENDS";
export  const GET_POSTS = "GET_POSTS";
export  const GET_MORE_POSTS = "GET_MORE_POSTS";
export  const ADD_TO_FEED = "ADD_TO_FEED";
export  const GET_PICS = "GET_PICS";
export  const UPLOAD = "UPLOAD";


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
export const setPosts =people =>({
    type: GET_POSTS,
    payload: people
  });
export const setMorePosts =people =>({
    type: GET_MORE_POSTS,
    payload: people
  });
export const addToFeed =posts =>({
    type: ADD_TO_FEED,
    payload: posts
  });
export const getPics =posts =>({
    type: GET_PICS,
    payload: posts
  });
export const upload =posts =>({
    type: UPLOAD,
    payload: posts
  });

export const handleFetchWithThunk = (id) => {

    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
        }
    };
 const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/profile/'
  /* console.log("1 get-me-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-me-thank",baseEndpoint+id) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint + id, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setSignIn(data))
       /* console.log("thick n THunky",data); */
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{/* console.log("3 get-me-thunk") */;dispatch(setLoading(false));}
  }}


  
export const getFriendsWithThunk = () => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
        }
    };
  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/profile/'
 /*  console.log("1 get-friends-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-friends-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setFriends(data))
       /* console.log("so manyfriends!",data); */
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
       console.log(error) 
    }finally{/* console.log("3 get-friends-thunk") */;dispatch(setLoading(false));}
  }}



export const getPostsWithThunk = () => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
        }
    };
  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/posts/'
  /* console.log("1 get-post-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-post-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        let  data  = await response.json()
        data = data.reverse()
        dispatch(setPosts(data))
        dispatch(addToFeed(data.slice(0,15)))
       console.log("PostPocalypse!",data);
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      /* console.log(error) */
    }finally{/* console.log("3 get-post-thunk") */;dispatch(setLoading(false));}
  }}
  
  
  
  export const getMorePostsWithThunk = (posts, n=2) => {
    const options = {
      method: 'GET',
      headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
          }
    };
  const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/posts/'
  /* console.log("1 get-post-think") */
  return async (dispatch, getState)=>{
    try {
      /* console.log("2 get-post-thank",baseEndpoint) */
      dispatch(setLoading(true));
      const response = await fetch(baseEndpoint, options);
      if (response.ok) {
        const  data  = await response.json()
        dispatch(setMorePosts(data.reverse().slice(posts.length, posts.length + n)))
        /* console.log("PostPocalypse!",data); */
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }finally{/* console.log("3 get-post-thunk") */;dispatch(setLoading(false));}
  }}


  export const submitPostsWithThunk = (postObj) => {
      const options = {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
          },
          body: JSON.stringify(postObj)
      };
    const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/posts/'
    console.log("1 submit-post-think")
    return async (dispatch, getState)=>{
      try {
        console.log("2 submit-post-thank",baseEndpoint)
        dispatch(setLoading(true));
        const response = await fetch(baseEndpoint, options);
        if (response.ok) {          
         console.log("PostEntered!");
        } else {
          alert('Error fetching results')
        }
      } catch (error) {
        console.log(error)
      }finally{console.log("3 submit-post-thunk");dispatch(setLoading(false));}
    }}

  export const uploadPicWithThunk = (postObj,id) => {
      const options = {
          method: 'POST',
          headers: {
              
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxOGRiNDc2NTM5YzAwMTViNWNkNmEiLCJpYXQiOjE2NjQxOTE5MjQsImV4cCI6MTY2NTQwMTUyNH0.L96ybdKZjUiPLG95huiiaqlmfE5bLIunxqmgGUnOYBY'
          },
          body: postObj
      };
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`
    console.log("1 submit-post-think")
    return async (dispatch, getState)=>{
      try {
        console.log("2 submit-post-thank",baseEndpoint)
        dispatch(setLoading(true));
        const response = await fetch(baseEndpoint, options);
        if (response.ok) {          
         console.log("PostEntered!");
        } else {
          alert('Error fetching results')
        }
      } catch (error) {
        console.log(error)
      }finally{console.log("3 submit-post-thunk");dispatch(setLoading(false));}
    }}

    
const pexelKey= "563492ad6f917000010000015080b999c314478fa318b5c998a262de"

export const getPicsWithThunk = () => {
  const options = {
      method: 'GET',
      headers: {
          Authorization: 'Bearer' +" "+ pexelKey
      }
  };
const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/posts/'
/* console.log("1 get-post-think") */
return async (dispatch, getState)=>{
  try {
    /* console.log("2 get-post-thank",baseEndpoint) */
    dispatch(setLoading(true));
    const response = await fetch(baseEndpoint, options);
    if (response.ok) {
      let  data  = await response.json()
      data = data.reverse()
      dispatch(setPosts(data))
      dispatch(addToFeed(data.slice(0,15)))
    /*  console.log("PostPocalypse!",data); */
    } else {
      alert('Error fetching results')
    }
  } catch (error) {
    /* console.log(error) */
  }finally{/* console.log("3 get-post-thunk") */;dispatch(setLoading(false));}
}}