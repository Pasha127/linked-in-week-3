import { Button, Card, Container, Row, Image} from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";
import { InfoSquareFill } from "react-bootstrap-icons";
import { getFriendsWithThunk } from "../app/redux/actions/actions";
import { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
  loadState: state.logic.loading,
  currentUser: state.user.activeUser,
  friendList: state.user.friends
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFriends: people => {
      dispatch(getFriendsWithThunk());
    },
  };  
};
const RightSideBar = (props) => {

  useEffect(()=>{
    props.getFriends()
},[]) 
  return (
    <>
    {console.log("where my friends at?",props.friendList)}
      <Container>
        <Row>
        <Card className="mt-4"style={{ width: '19rem', borderRadius: "12px" }}>
            <div className="pt-3">
              <span className="pl-3 pb-3 text d-flex justify-content-between font-weight-bold">
                Add to your feed 
                <InfoSquareFill className="mr-3 p-1" style={{ fontSize: "22px", color: "gray" }} />
              </span>
              <div className="pl-2">
                <div>
                  <div className="d-flex">
                  <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  style={{width: "100px"}}
                  roundedCircle />
                    <div className="profile-details ml-2 mt-2">
                      {/* friends&&friends.map((friend)=><FriendComponent friendData={friend}/>)
                      <div className="text-left font-weight-bold">{props.friendList[0].name}</div> */}
                      <div className="profile-title" style={{fontSize: "12px"}}>Epicode Student</div>
                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center mt-1"
                          variant="outline-dark" style={{width: "100px"}}>
                          <Plus className="ml-2"style={{ fontSize: "20px"}}/>
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                  <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  style={{width: "100px"}}
                  roundedCircle />
                    <div className="profile-details ml-2 mt-2">
                      <div className="text-left font-weight-bold">Simona</div>
                      <div className="profile-title" style={{fontSize: "12px"}}>Epicode Student</div>
                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center mt-1"
                          variant="outline-dark" style={{width: "100px"}}>
                          <Plus className="ml-2"style={{ fontSize: "20px"}}/>
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                  <Image src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" 
                  style={{width: "100px"}}
                  roundedCircle />
                    <div className="profile-details ml-2 mt-2">
                      <div className="text-left font-weight-bold">Simona</div>
                      <div className="profile-title" style={{fontSize: "12px"}}>Epicode Student</div>
                      <div className="profile-message">
                        <Button
                          className="rounded-pill btn-sm d-flex align-items-center mt-1"
                          variant="outline-dark" style={{width: "100px"}}>
                          <Plus className="ml-2"style={{ fontSize: "20px"}}/>
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reccomentations d-flex align-items-center mb-3 ml-2">
                  <span className="font-weight-bold " style={{color: "gray", fontSize: "14px"}}>
                    View all recommendations
                    <ArrowRight className="ml-2"
                      style={{ fontSize: "20px",}}
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
         </Card>
        </Row>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);