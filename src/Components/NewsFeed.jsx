import { Image, Button, Card, Form, FormControl} from "react-bootstrap";
import {Image as CloudImage } from "cloudinary-react"
/* import { getPostsWithThunk } from "../app/redux/actions/actions"; */
import { useEffect } from "react";
import { connect } from "react-redux";
import { formatDistanceToNow } from 'date-fns'
/* const mapStateToProps = state => {
  return {
  loadState: state.logic.loading,
  currentUser: state.user.activeUser,
  postList: state.logic.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: people => {
      dispatch(getPostsWithThunk());
    },
  };  
}; */
const NewsFeed = (props) => {
  
  /* useEffect(()=>{
    props.getPosts()
  },[])  */
  return (
     
       <Card className="mt-3 postCard"style={{ width: '33rem', borderRadius: "12px" }}>
            <div className="d-flex ml-3">
              <div className="profilePicStyle">
           {props.user?.image ?   
            <img className="profImg" src={props.user.image} alt="profile pic"/> :
                  <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" alt="prof pic"/> }
              </div>
             <div className="postHeader">
                <h6 className="mb-0 ">{props.text}</h6>
                <p className="text-secondary mb-0">{props.username}</p>
                <p className="text-secondary mt-n1 mb-0">{formatDistanceToNow(new Date(props.createdAt))}</p>
              </div> 
              <i className="bi bi-three-dots ml-auto mr-3 mt-2"></i>          
            </div>
      <div className="mb-2">
        {props.image ?
        <img className="postImg" src={props.image} alt="post "/> :
       <img src= "http://placekitten.com/528/400" alt="post"/> }
      </div>
      <div className="interactionsContainer mb-2">
          <div> <i className="bi bi-hand-thumbs-up ml-4"></i></div>
      </div >
      <div className="d-flex justify-content-around mb-1 ml-4 border-top interactionButtons">
        <Button className="d-flex align-items-center font-weight-bolder" style={{color: "grey"}} variant="white">
        <i className="bi bi-hand-thumbs-up  mr-1"></i>Like
        </Button>
        
        <Button className="d-flex align-items-center mr-3 font-weight-bolder" style={{color: "grey"}}  variant="white">
        <i className="bi bi-chat-text mr-1"></i> Comment
        </Button>
      </div>
      </Card>
   
)


}
export default /*  connect(mapStateToProps, mapDispatchToProps) */(NewsFeed)